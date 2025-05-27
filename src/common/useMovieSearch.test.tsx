import { renderHook, act } from '@testing-library/react-hooks';
import useMovieSearch from './useMovieSearch';
import axios from 'axios';

// Mock AppConstants
jest.mock('../AppConstants', () => ({
  URL: 'http://fakeurl.com/',
  API_KEY: 'apikey=123',
}));

// Mock axios and its CancelToken and isCancel
jest.mock('axios');
const mockedAxios: any = axios as jest.Mocked<typeof axios>;

// Provide CancelToken and isCancel mocks
beforeAll(() => {
  // Mock CancelToken constructor
  (axios as any).CancelToken = function (executor: any) {
    executor(() => {});
  };
  // Mock isCancel
  (axios as any).isCancel = jest.fn(() => false);
});

afterAll(() => {
  jest.resetAllMocks();
});

describe('useMovieSearch', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch movies and set state on success', async () => {
    const movies = [
      { Title: 'Movie1', imdbID: '1' },
      { Title: 'Movie2', imdbID: '2' },
    ];
    const response = {
      data: {
        Search: movies,
        totalResults: '2',
      },
    };
    mockedAxios.mockImplementationOnce(() => Promise.resolve(response));

    const { result, waitForNextUpdate } = renderHook(() =>
      useMovieSearch('batman', 1),
    );
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);
    expect(result.current.movies).toEqual(movies);
    expect(result.current.hasMore).toBe(true);
  });

  it('should set hasMore false if no results', async () => {
    const response = {
      data: {
        Search: [],
        totalResults: '',
      },
    };
    mockedAxios.mockImplementationOnce(() => Promise.resolve(response));
    const { result, waitForNextUpdate } = renderHook(() =>
      useMovieSearch('empty', 1),
    );
    await waitForNextUpdate();
    expect(result.current.movies).toEqual([]);
    expect(result.current.hasMore).toBe(false);
  });

  it('should set error on axios error', async () => {
    mockedAxios.mockImplementationOnce(() => Promise.reject(new Error('fail')));
    const { result, waitForNextUpdate } = renderHook(() =>
      useMovieSearch('fail', 1),
    );
    await waitForNextUpdate();
    expect(result.current.error).toBe(true);
    expect(result.current.loading).toBe(false);
  });

  it('should refetch when pageNumber changes', async () => {
    const movies1 = [{ Title: 'A', imdbID: '1' }];
    const movies2 = [{ Title: 'B', imdbID: '2' }];
    mockedAxios
      .mockImplementationOnce(() =>
        Promise.resolve({ data: { Search: movies1, totalResults: '1' } }),
      )
      .mockImplementationOnce(() =>
        Promise.resolve({ data: { Search: movies2, totalResults: '1' } }),
      );

    const { result, rerender, waitForNextUpdate } = renderHook(
      ({ query, page }) => useMovieSearch(query, page),
      { initialProps: { query: 'a', page: 1 } },
    );
    await waitForNextUpdate();
    expect(result.current.movies).toEqual(movies1);

    rerender({ query: 'a', page: 2 });
    await waitForNextUpdate();
    expect(result.current.movies).toEqual(movies2);
  });
});

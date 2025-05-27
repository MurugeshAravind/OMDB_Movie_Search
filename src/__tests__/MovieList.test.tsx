import 'jest-styled-components';
import MovieList from '../components/MovieList/MovieList.component';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const defaultProps = {
  Search: [
    {
      Title: 'Beta Test',
      Year: '2016',
      imdbID: 'tt4244162',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZjhlM2ZhMzUtMzU4ZC00ZjAyLWIxZmYtOWY4N2RlMWEzYTcwXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'The Beta Test',
      Year: '2021',
      imdbID: 'tt11738830',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZTBhNjcyMjEtM2NiMi00YzQ3LThlYjEtMjFiNDc3NWJiNGJiXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'Test Pilot',
      Year: '1938',
      imdbID: 'tt0030848',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZjllOWNkMWUtODVmYi00YzdkLWI4OWYtMGYyOTYzYTM4NzdhXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'Test',
      Year: '2013',
      imdbID: 'tt2407380',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTQwMDU5NDkxNF5BMl5BanBnXkFtZTcwMjk5OTk4OQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Test',
      Year: '2025',
      imdbID: 'tt27477888',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNTAyZTkxZjItMzI0Yi00YmMyLWI4ZjgtZTk2YzA1OTVmZmE4XkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'The Test',
      Year: '2012',
      imdbID: 'tt1986180',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYwNTgzMjM5M15BMl5BanBnXkFtZTcwNDUzMTE1OA@@._V1_SX300.jpg',
    },
    {
      Title: 'El Test',
      Year: '2022',
      imdbID: 'tt15502648',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BM2U1MmQ0ZDUtNGU0My00NDg1LWE2ZDEtNWRmMjhkODUzNDYxXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'The Test',
      Year: '2013',
      imdbID: 'tt2616114',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMzMDQwMzM2M15BMl5BanBnXkFtZTcwMzA1OTg1OQ@@._V1_SX300.jpg',
    },
    {
      Title: 'This Is Not a Test',
      Year: '1962',
      imdbID: 'tt0183884',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTU5MDkwNDAzOV5BMl5BanBnXkFtZTgwNjE4NDgwMzE@._V1_SX300.jpg',
    },
    {
      Title: 'Test Pattern',
      Year: '2019',
      imdbID: 'tt10121508',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMWNiMmFiMTgtYjM2Ni00NzQxLWI1NTgtNWE5YmNkOTAyZDEwXkEyXkFqcGc@._V1_SX300.jpg',
    },
  ],
  totalResults: '881',
  Response: 'True',
};

jest.mock('../common/Api/FetchData', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('movie list test suite', () => {
  beforeEach(() => {
    // Mock FetchData to resolve with defaultProps
    (require('../common/Api/FetchData').default as jest.Mock).mockResolvedValue(
      {
        status: 200,
        data: defaultProps,
      },
    );
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('movie list renders without crashing', () => {
    const { getByTestId } = render(
      <MemoryRouter future={{ v7_startTransition: true }}>
        <MovieList />
      </MemoryRouter>,
    );
    const input = getByTestId('search-input');
    expect(input).toBeInTheDocument();
    fireEvent.input(input, {
      target: { value: 'test' },
    });

    jest.runAllTimers();
    expect(input).toHaveValue('test');
  });
  test('updates search query on user input', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <MovieList />
      </MemoryRouter>,
    );

    const input = getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'Batman' } });

    expect(input).toHaveValue('Batman');
  });
});

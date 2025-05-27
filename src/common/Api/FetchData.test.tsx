import FetchData from './FetchData';
import axios from 'axios';

jest.mock('axios');
const mockedAxios: any = axios as jest.Mocked<typeof axios>;

describe('FetchData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call axios with provided config and resolve with response', async () => {
    const mockResponse = { data: 'success' };
    mockedAxios.mockResolvedValueOnce(mockResponse);

    const config = { method: 'GET', url: '/test' };
    const result = await FetchData(config);

    expect(mockedAxios).toHaveBeenCalledWith({
      method: 'GET',
      url: '/test',
    });
    expect(result).toBe(mockResponse);
  });

  it('should call axios with default values if config is missing method and url', async () => {
    const mockResponse = { data: 'default' };
    mockedAxios.mockResolvedValueOnce(mockResponse);

    const config = {};
    const result = await FetchData(config);

    expect(mockedAxios).toHaveBeenCalledWith({
      method: {},
      url: {},
    });
    expect(result).toBe(mockResponse);
  });

  it('should return error if axios rejects', async () => {
    const mockError = new Error('fail');
    mockedAxios.mockImplementationOnce(() => Promise.reject(mockError));

    const config = { method: 'POST', url: '/fail' };
    const result = await FetchData(config);

    expect(mockedAxios).toHaveBeenCalledWith({
      method: 'POST',
      url: '/fail',
    });
    expect(result).toBe(mockError);
  });
});

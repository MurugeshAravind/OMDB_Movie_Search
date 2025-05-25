import { render, screen } from '@testing-library/react';
import MovieDetails from '../components/MovieDetails/MovieDetails.component';
import FetchData from '../common/Api/FetchData';
import { MemoryRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Mock FetchData
const defaultData = {
  Title: 'Fadily Camara: La plus drôle de tes copines',
  Year: '2019',
  Rated: 'N/A',
  Released: '14 Nov 2019',
  Runtime: '54 min',
  Genre: 'Comedy',
  Director: 'Fary Brito',
  Writer: 'Fadily Camara, Fary',
  Actors: 'Fadily Camara',
  Plot: 'N/A',
  Language: 'French',
  Country: 'France',
  Awards: 'N/A',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNDRhMDY0YTUtNGMwOC00ODMzLTkwZjgtYjg0MzE3ZjRiNTM0XkEyXkFqcGc@._V1_SX300.jpg',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '5.5/10',
    },
  ],
  Metascore: 'N/A',
  imdbRating: '5.5',
  imdbVotes: '61',
  imdbID: 'tt11168150',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: 'N/A',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
};

jest.mock('../common/Api/FetchData', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('MovieDetails mock', () => {
  beforeEach(() => {
    // Mock FetchData to resolve with defaultData
    (FetchData as jest.Mock).mockResolvedValue({
      status: 200,
      data: defaultData,
    });
    // Mock useParams to return a test id
    (useParams as jest.Mock).mockReturnValue({ id: 'tt11168150' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('rendered properly', async () => {
    render(
      <MemoryRouter>
        <MovieDetails />
      </MemoryRouter>,
    );
    // Use a function matcher to find the "Year:" label even if split across elements
    const yearLabel = await screen.findByText(/Year:/i, { exact: false });
    expect(yearLabel).toBeInTheDocument();
  });
});

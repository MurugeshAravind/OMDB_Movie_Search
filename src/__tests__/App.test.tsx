import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PageNotFound from '../common/PageNotFound/PageNotFound';
import MovieDetails from '../components/MovieDetails/MovieDetails.component';
import MovieList from '../components/MovieList/MovieList.component';

const router = createMemoryRouter([
  {
    path: '/',
    element: <MovieList />,
  },
  {
    path: '/:id',
    element: <MovieDetails />,
  },
  {
    path: '/OMDB_Movie_Search',
    element: <MovieList />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);
describe('App tests', () => {
  test('test app component', () => {
    render(
      <RouterProvider router={router} future={{ v7_startTransition: true }} />,
    );
    expect(screen.getByText('OMDB Search')).toBeInTheDocument();
  });
  test('test page not found component', () => {
    // Navigate to an unknown route
    const notFoundRouter = createMemoryRouter([...router.routes], {
      initialEntries: ['/OMDB_Movie_Search/unknown-route'],
    });
    render(
      <RouterProvider
        router={notFoundRouter}
        future={{ v7_startTransition: true }}
      />,
    );
    expect(screen.getByText('Oops Page Not Found!...')).toBeInTheDocument();
  });
});

import MovieList from './components/MovieList/MovieList.component';
import MovieDetails from './components/MovieDetails/MovieDetails.component';
import PageNotFound from './common/PageNotFound/PageNotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
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

function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;

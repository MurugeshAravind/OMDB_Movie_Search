import 'jest-styled-components';
import MovieList from '../components/MovieList/MovieList.component';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
const MovieListComponent = render(
  <MemoryRouter future={{ v7_startTransition: true }}>
    <MovieList />
  </MemoryRouter>,
);
describe('movie list test suite', () => {
  test('movie list snapshot test', () => {
    expect(MovieListComponent).toMatchSnapshot();
  });
});

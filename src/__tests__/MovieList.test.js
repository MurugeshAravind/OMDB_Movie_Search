import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Router from "react-router-dom";
import renderer from "react-test-renderer";
import "jest-styled-components";
import MovieList from "../components/MovieList/MovieList.component";
const history = createMemoryHistory();
const MovieListComponent = renderer.create(<MovieList />).toJSON();
const MovieListComponentInstance = () => {
  return <Router location={history.location} navigator={history}>
    <MovieList />
  </Router>
}

describe("movie list test suite", () => {
  test("test the movie list component", () => {
    render(MovieListComponentInstance);
    expect(MovieListComponentInstance).toBeTruthy();
  });
  test("movie list snapshot test", () => {
    expect(MovieListComponent).toMatchSnapshot();
  })
});

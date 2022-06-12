import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Router from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
const history = createMemoryHistory();

const MovieListComponentInstance = () => {
  return <Router location={history.location} navigator={history}>
    <MovieList />
  </Router>
}

describe("movie details test cases", () => {
  test("test the movie details app", () => {
    render(MovieListComponentInstance);
    expect(MovieListComponentInstance).toBeTruthy();
  });
});

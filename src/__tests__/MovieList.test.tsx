import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import MovieList from "../components/MovieList/MovieList.component";
const MovieListComponent = renderer.create(<MovieList />);
describe("movie list test suite", () => {
  test("movie list snapshot test", () => {
    expect(MovieListComponent).toMatchSnapshot();
  })
});

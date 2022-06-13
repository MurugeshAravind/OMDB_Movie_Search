import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import MovieDetails from "../components/MovieDetails/MovieDetails.component";
const MovieDetailsComponent = renderer.create(<MovieDetails />).toJSON();
describe("movie details test cases", () => {
  test("movie detail snapshot test", () => {
    expect(MovieDetailsComponent).toMatchSnapshot();
  })
});

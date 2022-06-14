import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MovieDetails from "../components/MovieDetails/MovieDetails.component";
describe("movie details test suite", () => {
  test("movie details", () => {
    const {container} = render(<MovieDetails />, {wrapper: MemoryRouter});
    expect(container.getElementsByTagName("div")).toBeTruthy();
  })
});

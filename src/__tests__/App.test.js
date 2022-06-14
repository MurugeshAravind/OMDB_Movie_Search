import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import {App} from "../App";
describe("App tests", () => {
  test("test app component", () => {
    render(<App />, {wrapper: MemoryRouter});
    expect(screen.queryByTestId("app")).toBeTruthy();
    expect(screen.getByText("OMDB Movie Search"));
  });
});

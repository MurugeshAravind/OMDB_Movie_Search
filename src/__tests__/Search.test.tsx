import React from "react";
import { MemoryRouter } from "react-router-dom";
import Search from "../common/Search/Search";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("search component", () => {
  test("test the input box in search component", () => {
    render(<Search />, {wrapper: MemoryRouter});
    expect(screen.getByTestId("search")).toBeTruthy();
  })
  test("Try user event", () => {
    render(<Search />, {wrapper: MemoryRouter});
    let input = screen.getByTestId("search");
    expect(input.firstChild).toBeTruthy();
  })
});

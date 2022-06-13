import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Router from "react-router-dom";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Search from "../common/Search/Search";
const history = createMemoryHistory();
const search = renderer.create(<Search />).toJSON()
const SearchComponentInstance = () => {
  <Router history={history.location} navigator={history}>
    <Search />
  </Router>;
};
describe("search component", () => {
  test("test the input box in search component", () => {
    render(SearchComponentInstance);
    expect(SearchComponentInstance).toBeTruthy();
    expect(search).toMatchSnapshot();
  })
});

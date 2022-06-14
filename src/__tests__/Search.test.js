import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Search from "../common/Search/Search";
const search = renderer.create(<Search />)
describe("search component", () => {
  test("test the input box in search component", () => {
    expect(search).toMatchSnapshot();
  })
});

import React from "react";
import Navigation from "../common/Navigation/Navigation";
import renderer from "react-test-renderer";
import "jest-styled-components";
const navElement = renderer.create(<Navigation />)
describe('navigation test', () => {
    test('nav snapshot test', () => {
        expect(navElement).toMatchSnapshot();
    })
})
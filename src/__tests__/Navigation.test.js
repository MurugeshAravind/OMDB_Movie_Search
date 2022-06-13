import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Router from "react-router-dom";
import Navigation from "../common/Navigation/Navigation";
import renderer from "react-test-renderer";
import "jest-styled-components";

const history = createMemoryHistory();
const navElement = renderer.create(<Navigation />)
const NavigationComponentInstance = () => {
    <Router history={history.location} navigator={history}>
     <Navigation history={history} />
    </Router>
}
describe('navigation test', () => {
    test('test nav', () => {
       render(NavigationComponentInstance)
       expect(NavigationComponentInstance).toBeTruthy();
    })
    test('nav snapshot test', () => {
        expect(navElement).toMatchSnapshot();
    })
})
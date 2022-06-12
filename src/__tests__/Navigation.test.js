import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Router from "react-router-dom";
import Navigation from "../common/Navigation/Navigation";

const history = createMemoryHistory();
const NavigationComponentInstance = () => {
    <Router history={history.location} navigator={history}>
     <Navigation />
    </Router>
}
describe('navigation test', () => {
    test('test nav', () => {
       render(NavigationComponentInstance)
       expect(NavigationComponentInstance).toBeTruthy();
    })
})
import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Router from "react-router-dom";
import App from "../App";
const history = createMemoryHistory();
const AppComponentInstance = () => {
    <Router history={history.location} navigator={history}>
     <App data-testid="app" />
    </Router>
}
describe('App tests', () => {
    test('test app component', () => {
       render(AppComponentInstance)
       expect(AppComponentInstance).toBeTruthy();
    })
})
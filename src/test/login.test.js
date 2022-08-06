import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Login from "../components/Login";
import store from "../store";
import { BrowserRouter as Router } from 'react-router-dom';

describe("Login", () => {
    it("will have all expected fields", () => {
        var component = render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );
        var usernameInput = component.getByTestId("username");
        var passwordInput = component.getByTestId("password");
        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();

        var submitButton = component.getByText('Submit')
        expect(submitButton).toBeInTheDocument();
    });
    it('will display an error if the name is not provided.', () => {
        var component = render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        ); 
        var submitButton = component.getByText('Submit');
        fireEvent.click(submitButton);
        expect(component.getByTestId('error-header')).toBeInTheDocument();
    });
})


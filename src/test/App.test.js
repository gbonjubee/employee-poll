import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../components/App";
import store from "../store";
import {BrowserRouter as Router} from 'react-router-dom';

describe("App", () => {
  test("should render the loginform onload", () => {
    var component =render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const loginText = screen.getByText(/Employee Poll Login/)
    expect(loginText).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  })
})


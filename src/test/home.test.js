import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "../components/Home";
import store from "../store";
import {BrowserRouter as Router} from 'react-router-dom';

describe("Home", () => {
  test("should render the home page onload", () => {
    var component =render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  })
})


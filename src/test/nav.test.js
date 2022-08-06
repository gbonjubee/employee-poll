import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Nav from "../components/Nav";
import store from "../store";
import {BrowserRouter as Router} from 'react-router-dom';

describe("App", () => {
  test("should render the home page onload", () => {
    var component =render(
      <Provider store={store}>
        <Router>
          <Nav />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  })
})


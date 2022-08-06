import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import NewPoll from "../components/NewPoll";
import store from "../store";
import {BrowserRouter as Router} from 'react-router-dom';

describe("NewPoll", () => {
  test("should render the new poll page onload", () => {
    var component =render(
      <Provider store={store}>
        <Router>
          <NewPoll />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  })
})


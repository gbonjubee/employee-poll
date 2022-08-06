import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Poll from "../components/Poll";
import store from "../store";
import {BrowserRouter as Router} from 'react-router-dom';

describe("Poll", () => {
  test("should render the poll page onload", () => {
    var component =render(
      <Provider store={store}>
        <Router>
          <Poll  id/>
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  })
})


import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LeaderBoard from "../components/LeaderBoard";
import store from "../store";
import {BrowserRouter as Router} from 'react-router-dom';

describe("LeaderBoard", () => {
  test("should render the leaderboard page onload", () => {
    var component =render(
      <Provider store={store}>
        <Router>
          <LeaderBoard />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  })
})


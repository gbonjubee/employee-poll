import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import LoadingBar  from "react-redux-loading-bar";

const App = (props) => {
    useEffect(() => {
      props.dispatch(handleInitialData());
    }, []);

  return <div>
    <LoadingBar />
    {props.loading === true ? null : <Login /> }
      </div>;
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser !== null,
});

export default connect(mapStateToProps)(App);
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Leaderboard from "./LeaderBoard"
import Nav from "./Nav";
import LoadingBar  from "react-redux-loading-bar";
import Home from "./Home";
import Poll from "./Poll";
import NewPoll from "./NewPoll";


const App = (props) => {
    useEffect(() => {
      props.dispatch(handleInitialData());
    });

  return (
    <Fragment>
    <LoadingBar/> 
    {props.loading ? (<Login />) : (
   <div >
    <Nav />  
    <Routes>
      <Route path="/login" exact element={<Login />}/>
      <Route path="/" exact element={<Home />}/>
      <Route path="/add" exact element={<NewPoll />}/>
      <Route path="/questions/:question_id" exact element={<Poll />}/>
      <Route path="/leaderboard" exact element={<Leaderboard/>}/>
    </Routes>
    </div>
    )}
  </Fragment>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
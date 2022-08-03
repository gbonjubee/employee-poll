import { Link } from "react-router-dom";
import {handleUserLogin} from "../actions/shared"
import { useNavigate } from "react-router-dom";
import "../stylesheets/nav.css"
import { connect } from "react-redux";

const Nav = (props) => {
  const navigate = useNavigate();
  
  const {authedUser, users} = props;
  const logout = () => {
       props.dispatch(handleUserLogin(null));
      navigate("/login");
    };
    const avatarURL = users[authedUser].avatarURL;
    const name = users[authedUser].name;

  return (
    <nav className="nav">
      <ul>
      <li onClick={logout}>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/question">Create Poll</Link>
        </li>
        <li>
          <Link to="/leaderboard">LeaderBoard</Link>
        </li>
        <li >
          <img src={avatarURL} alt={name} height="40" width="50"/></li> authedUser === null ? (
        <li onClick={logout}>
          <Link to="/login">Logout</Link>
          </li>
        ) : 
        <li onClick={logout}>
          <Link to="/login">Login</Link>
          </li>
      </ul>
    </nav>
  );
};


const mapStateToProps = ({ authedUser, users }) => {
  return ({
    authedUser,
    users,
  })
}


export default connect(mapStateToProps)(Nav);
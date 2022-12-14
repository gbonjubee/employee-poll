import { Link } from "react-router-dom";
import { handleUserLogin } from "../actions/authedUser"
import { useNavigate } from "react-router-dom";
import "../stylesheets/nav.css"
import { connect } from "react-redux";

const Nav = (props) => {
  const navigate = useNavigate();
  const { authedUser, users } = props;
  if (!users || !users[authedUser]) return;

  const avatarURL = users[authedUser].avatarURL;
  const name = users[authedUser].name;

  const logout = () => {
    props.dispatch(handleUserLogin(null));
    navigate("/login");
  };
 

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Create Poll</Link>
        </li>
        <li>
          <Link to="/leaderboard">LeaderBoard</Link>
        </li>

        <li onClick={logout}> <Link to="/login">Logout</Link></li>
        <li >
          <img src={avatarURL} alt={name} height="40" width="50" />
          <b>{name}</b>
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
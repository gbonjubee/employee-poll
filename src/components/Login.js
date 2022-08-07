import { connect } from "react-redux";
import { handleUserLogin } from "../actions/authedUser";
import "../stylesheets/style.css"
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Login = (props) => {
    const location = useLocation();
	const {pathname} = location;
    const [error, setError] = useState(false);
	const { users } = props;
	const navigate = useNavigate();
	const existingUsers = []
	Object.keys(users).map((user) => existingUsers.push(users[user]));


	const handleLogin = (e) => {
	console.log(location);
		e.preventDefault();
		if (!e.target.username ||  ! e.target.password){
            setError(true);
            return;
		}
		const username = e.target.username.value;
		const password =e.target.password.value;
		const user = users[username];
		if (user && user.password === password) {
		  props.dispatch(handleUserLogin(username));
		  navigate(pathname === "/login" ? "/" : pathname);
		} else{
			setError(true);
            return;
		}
	};

	const handleLoginAsExistingUser = (e) => {
		e.preventDefault();
		props.dispatch(handleUserLogin(e.target.value));
		navigate(pathname === "/login" ? "/" : pathname);
	};

	return (
		<div  className="formstyle">
            {error &&
                <h3 className={"Error"} data-testid="error-header">Please enter correct username and password</h3>
            }
			<h3 className="center">Employee Poll Login</h3>
			<form className="form" onSubmit={handleLogin} >
			
				<div className="input-container">
					<label>Username </label>
					<input type="text" name="username"  data-testid="username" required/>
				</div>
				<div className="input-container">
					<label>Password </label>
					<input type="password" name="password" data-testid="password" required />
				</div>
				<div className="button-container">
					<input type="submit" value ='Submit' />
				</div>
				<div>

					<label> Existing User?  </label>
					<select onChange={(e) => handleLoginAsExistingUser(e)}>
						<option>choose your username</option>
						{existingUsers.map((user) => (
							<option key={user.id} value={user.id}>
								{user.name}
							</option>
						))}
					</select>
				</div>
			</form>
		</div>

	);
};


const mapStateToProps = ({ users}) => {
	return ({
		users,
	})
}

export default connect(mapStateToProps)(Login)




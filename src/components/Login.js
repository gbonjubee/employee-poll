import { connect } from "react-redux";
import { handleUserLogin } from "../actions/shared";
import "../stylesheets/style.css"
import { useNavigate } from "react-router-dom";


const Login = (props) => {
	const { users } = props;
	const navigate = useNavigate();
	const existingUsers = []
	Object.keys(users).map((user) => existingUsers.push(users[user]))

	const handleLogin = (e) => {
		e.preventDefault();
		props.dispatch(handleUserLogin(e.target.value));
		navigate("/");
	};

	return (
		<div  className="formstyle">
			<h3 className="center">Employee Poll Login</h3>
			<form  onSubmit={handleLogin} >
			
				<div className="input-container">
					<label>Username </label>
					<input type="text" name="uname" required />
				</div>
				<div className="input-container">
					<label>Password </label>
					<input type="password" name="pass" required />
				</div>
				<div className="button-container">
					<input type="submit" />
				</div>
				<div>

					<label> Existing User?  </label>
					<select onChange={(e) => handleLogin(e)}>
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


const mapStateToProps = ({ users }) => {
	return ({
		users,
	})
}

export default connect(mapStateToProps)(Login)




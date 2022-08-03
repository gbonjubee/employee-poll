const Logout = (props) => {

    const logout = () => {
        //props.dispatch(handleUserLogin(""));
        navigate("/");
      };
      return (
        <nav className="nav">
          <ul>
          </ul>
        </nav>
        );

}


const mapStateToProps = ({ authedUser, users }) => {
    return ({
      authedUser,
      users,
    })
  }


  
  
  export default connect(mapStateToProps)(Nav);
import {connect} from "react-redux";
import "../stylesheets/leaderboard.css"


const Leaderboard = (props) => {
const {users} = props;
const usersList=[]
Object.keys(users).map((user) => usersList.push(users[user]));
usersList.map((user,index) => user.answeredQuestionsCount = Object.keys(usersList[index].answers).length)
usersList.sort((a, b) =>  b.answeredQuestionsCount - a.answeredQuestionsCount); 


return (
        <div >
        <table>
          <thead>
          <tr>
            <th>Employees List</th>
            <th>Answered Poll Count</th>
            <th>Created Polls</th>
          </tr>
          </thead>
          {usersList.map((user) => {
            return (
              <tbody>
              <tr key={user.id}>
                <td> <img src={user.avatarURL} alt={user.name} height="40" width="50"/>{user.name} </td>
                <td>{Object.keys(user.answers).length}</td>
                <td>{user.questions.length}</td>
              </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    )
}

const mapStateToProps = ({users}) => {
    return (
        {
            users
        }
    )
}

export default connect(mapStateToProps)(Leaderboard )
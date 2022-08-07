import {connect} from "react-redux";
import "../stylesheets/leaderboard.css"
import PropTypes from 'prop-types';


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
          <tbody>
          {usersList.map((user) => {
            const {id, avatarURL, name, answers , questions } = user;
            return (
              <tr key={id}>
                <td> <img src={avatarURL} alt={name} height="40" width="50"/>{name} </td>
                <td>{Object.keys(answers).length}</td>
                <td>{questions.length}</td>
              </tr>
            )
          })}
          </tbody>
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

Leaderboard.propTypes = {
  id: PropTypes.string,
  avatarURL: PropTypes.string,
  name: PropTypes.string,
  answers: PropTypes.object,
  questions: PropTypes.array

}

export default connect(mapStateToProps)(Leaderboard )
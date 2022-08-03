import {connect} from "react-redux";
import "../stylesheets/leaderboard.css"


const Leaderboard = (props) => {
const {users} = props;
const employeesList=[]
Object.keys(users).map((user) => employeesList.push(users[user]));
employeesList.map((user,index) => user.answeredQuestionsCount = Object.keys(employeesList[index].answers).length)
employeesList.sort((a, b) =>  b.answeredQuestionsCount - a.answeredQuestionsCount); 


return (
        <div >
        <table>
          <tr>
            <th>EmployeesList</th>
            <th>Answered Poll Count</th>
            <th>Created Polls</th>
          </tr>
          {employeesList.map((employee) => {
            return (
              <tr key={employee.id}>
                <td> <img src={employee.avatarURL} alt={employee.name} height="40" width="50"/>{employee.name} </td>
                <td>{Object.keys(employee.answers).length}</td>
                <td>{employee.questions.length}</td>
              </tr>
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
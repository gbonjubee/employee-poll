import { connect } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom'
import { handleAnswerQuestion } from "../actions/questions";
import { addUsersAnswer } from "../actions/users";
import "../stylesheets/question.css"
import { useState } from "react";


const AnswerQuestion = (props) => {
    let [selected] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { authedUser, users } = props
    const user = users[authedUser];
    if(!location || !location.state || !location.state.currentQuestion) return;
    const currentQuestion = location.state.currentQuestion;
    const { question, id } = currentQuestion;
    const userAnswer = user.answers[id];
    const { optionOne, optionTwo, optionOneVotes, optionTwoVotes, name, avatar } = question;
   

    const handleSubmit = (e) => {
        e.preventDefault();

        props.dispatch(addUsersAnswer({
            authedUser :authedUser,
            qid: id,
            answer: selected,
        }))

        props.dispatch(handleAnswerQuestion({
            qid: id,
            answer: selected,
            authedUser: authedUser
        }))
       alert(" Your answer has been successfully submitted ");
       setTimeout(() => navigate("/"), 2000); 

    }

    const calculateVotePercentage = (currentOptionVoteCount) => {
        const totalVotes = optionOne.votes.length + optionTwo.votes.length;
        const percentage = (currentOptionVoteCount / (totalVotes) * 100);
        return Math.round(percentage) + "%";

    }

    const onValueChange = (event) =>{
          selected = event.target.value;
          console.log(selected);
        };

    return (
        <div>
            {!userAnswer ? (
                <form className="pollstyle" onSubmit={handleSubmit}>
                    <div><h2>Would You Rather? </h2></div>
                    <div><h4>Create Your Own Poll </h4></div>
                    <div>
                        <div>
                            <input type="radio" id="optionOne" name="poll" value="optionOne" onChange={onValueChange} />
                            <label> {optionOne.text} </label>
                        </div>
                        <br /><br />
                        <div>
                            <input type="radio" id="optionTwo" name="poll" value="optionTwo" onChange={onValueChange}  />
                            <label> {optionTwo.text} </label>
                        </div>
                        <br /><br />
                        <button className="btn" type="submit" >Submit </button>
                        <br /><br />
                        <img src={avatar} alt={name} height="40" width="50" />
                        <h3>Poll By: {`${name}`} </h3>
                    </div>

                </form>
            ) : (
                <form className="pollstyle">
                    <div><h2>Poll Summary  </h2></div>
                    <div>
                        <div>
                            <label> <b>Option1:</b> {optionOne.text} </label> {userAnswer === "optionOne" ? (<label> &#10003;</label>) : ""} <br />
                            <label> <b>Vote Count:</b>  {optionOneVotes.votes.length} </label><br />
                            <label> <b>Vote Percentage: </b> {calculateVotePercentage(optionOneVotes.votes.length)} </label>

                        </div>
                        <br /><br />
                        <div>
                            <label><b>Option2:</b>  {optionTwo.text} </label> {userAnswer === "optionTwo" ? (<label> &#10003; </label>) : ""} <br />
                            <label> <b>Vote Count:</b>  {optionTwoVotes.votes.length}</label><br />
                            <label><b>Vote Percentage: </b> {calculateVotePercentage(optionTwoVotes.votes.length)}</label>
                        </div>
                        <br /><br />
                        <img src={avatar} alt={name} height="40" width="50" />
                        <h3>Poll By: {`${name}`} </h3>
                    </div>

                </form>

            )};
        </div>
    );
}

const mapStateToProps = ({ authedUser, users, questions }) => {
    return (
        {
            users,
            authedUser,
            questions
        }
    )
}

export default connect(mapStateToProps)(AnswerQuestion)



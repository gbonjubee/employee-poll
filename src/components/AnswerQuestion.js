import { connect } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom'
import { handleAnswerQuestion } from "../actions/questions";


const AnswerQuestion = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentQuestion = location.state.currentQuestion;
    const { question, id } = currentQuestion;
    const { optionOne, optionTwo, name } = question;
    let percentageMessage ="";
    const handleSubmit = (e) => {

        percentageMessage = (e.target.value === "optionOne") ? calculateVotePercentage(optionOne.votes.length) 
        : calculateVotePercentage(optionTwo.votes.length);

        props.dispatch(handleAnswerQuestion({
            qid: id,
            answer: e.target.value,
        }))

        console.log(percentageMessage);
        alert(" Your answer has been submitted ".percentageMessage)
        setTimeout(() => navigate("/"), 2000); 

    }

    const calculateVotePercentage = (currentOptionVoteCount) => {
        const totalVotes = optionOne.votes.length + optionTwo.votes.length;
        const percentage = ((currentOptionVoteCount/(totalVotes))*100).toFixed(2);
               return `${percentage} percent of employees voted for this option`

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Would you rather? </h2>
                <div>
                    <div>
                        <input type="radio" id="optionOne" name="poll" value={optionOne.text} />
                        <label> {optionOne.text} </label>
                    </div>
                    <br /><br />
                    <div>
                        <input type="radio" id="optionTwo" name="poll" value={optionTwo.text}  />
                        <label> {optionTwo.text} </label>
                    </div>
                    <br /><br />
                    <button className="btn" type="submit" >Submit </button>
                    <br /><br />
                </div>
                <h2>Poll By: {`${name}`} </h2>
            </form>
        </div>
    );
}

const mapStateToProps = ({ authedUser, users }) => {
    return (
        {
            users,
            authedUser,
        }
    )
}

export default connect(mapStateToProps)(AnswerQuestion)



import { connect } from "react-redux";
import PollList from "./PollList";
import "../stylesheets/homepage.css"
import { useState } from "react";


const Dashboard = (props) => {
 
  const {authedUser, users, questions} = props;
  const questionList =  Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  const answeredQuestions = questionList.filter(id => users[authedUser].answers[id]);
  const unAnsweredQuestions = questionList.filter(id => !users[authedUser].answers[id]);
  const [activeAnswered, setActiveAnswered] = useState(false)
  const [activeUnAnswered, setActiveUnAnswered] = useState(true)

  const showAnsweredQuestions = () => {
    if (activeAnswered) {
      setActiveAnswered(false);
    }
    else {
      setActiveAnswered(true);
      setActiveUnAnswered(false);
    }
  }

  const showUnAnsweredQuestions = () => {
    if (activeUnAnswered) {
      setActiveUnAnswered(false);

    } else {
      setActiveUnAnswered(true);
      setActiveAnswered(false);
    }
  }

  const showAllQuestions = () => {
    setActiveAnswered(true);
    setActiveUnAnswered(true);
  }



  return (
    <div>
      <div className="questions_list">
      <button onClick={showAllQuestions} ><b>Show All Polls</b></button>
        <button onClick={showAnsweredQuestions} ><b>Show Answered Polls</b></button>
        <div className="answered_questions">
          {activeAnswered ? (
            answeredQuestions.length === 0 ? (
              <h3 className="no_polls">No polls available.</h3>
            ) : (answeredQuestions.map(question => (
              <li key={question} className="question_listitems" >
                <PollList  id={question}/>
              </li>
            )))
          ) : null}
        </div>
        <button onClick={showUnAnsweredQuestions}><b>Show Unanswered Polls</b></button>
        <div className="unanswered_questions">

          {activeUnAnswered ? (
            unAnsweredQuestions.length === 0 ? (
              <h3 className="no_polls">No polls available.</h3>
            ) : (unAnsweredQuestions.map(question => (
              <li key={question} className="question_listitems">
                <PollList id={question}/>
              </li>
            )))
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser, users }) => {
  return ({
    authedUser,
    users,
    questions,
  })
}


export default connect(mapStateToProps)(Dashboard)

import { connect } from "react-redux"
import { Link } from "react-router-dom"

 const formatQuestion = (question, author) =>{
    const {id, optionOne, optionTwo, timestamp, } = question;
    const {name,avatarURL } = author;
    return {
        name,
        id, 
        optionOne,
        optionTwo,
        optionOneVotes: optionOne,
        optionTwoVotes: optionTwo,
        timestamp,
        avatar: avatarURL,
    }
};

const Question = (props) => {
    const timestamp = props.question.timestamp
    const date = new Date(timestamp);
    const link = `/questions/${props.id}`
    const stateData =  {
        id: props.id,
        question: props.question,
    }
    
    return (
        <Link to={link} state={{ currentQuestion: stateData }}>
            <h4 data-testid="header-element">{props.question.name}</h4>
            <p data-testid="date-element">{"Date: " + date.getDate() +
                "/" + (date.getMonth() + 1) +
                "/" + date.getFullYear()
            }</p>
        </Link>
    )
}

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
    const question = questions[id];

    return (
        {
            authedUser,
            question: question ?
                formatQuestion(question, users[question.author]) : null,
            // What is the peace of state in the store, this component cares about? --> tweets
            // What will show up as a property on this container
        }
    )
}

export default connect(mapStateToProps)(Question)



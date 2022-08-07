import { connect } from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

 const formatQuestion = (question, author) =>{
    const {id, optionOne, optionTwo, timestamp, } = question;
    const {name, avatarURL } = author;
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
    const {question:{timestamp, name, avatar }, id , question} = props
    const date = new Date(timestamp);
    const link = `/questions/${id}`
    const stateData =  {
        id: id,
        question: question,
    }
    
    return (
        <Link to={link} state={{ currentQuestion: stateData }}>
            <img src={avatar} alt={name} height="40" width="50"/>
            <h4 data-testid="header-element">{name}</h4>
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
        }
    )
}

Question.propTypes = {
    link: PropTypes.string,
    stateData:PropTypes.object,
    avatar: PropTypes.string,
    name: PropTypes.string,
}

export default connect(mapStateToProps)(Question)



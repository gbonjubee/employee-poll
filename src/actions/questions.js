import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addQuestionToUser, addUsersAnswer } from "./users";

export const CREATE_QUESTION = "CREATE_QUESTION"
export const ANSWER_QUESTION = "ANSWER_QUESTION"
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"

export function createQuestion(question){
    return{
        type: CREATE_QUESTION,
        question,
    };
}

export function handleAddQuestion(question) {
    const {optionA, optionB, authedUser} = question;
    return (dispatch) => {
      dispatch(showLoading());
      return saveQuestion({
        optionOneText: optionA,
        optionTwoText: optionB,
        author: authedUser
      }).then((data) => {
        dispatch(createQuestion(data));
        dispatch(addQuestionToUser(data));
        })
        .then(() => dispatch(hideLoading()));
    };
  }


export function answerQuestion({qid, answer, authedUser}){
    return{
        type: ANSWER_QUESTION,
        qid,
        answer,
        authedUser,
    };
}

export function handleAnswerQuestion({qid, answer, authedUser}){
    return (dispatch) => {
        dispatch(showLoading());

        return saveQuestionAnswer({
            authedUser,
            qid, 
            answer,
        })
        .then(dispatch(answerQuestion({ qid, answer, authedUser})))
        .then(dispatch(addUsersAnswer({ qid, answer, authedUser })))
        .then(dispatch(hideLoading()));
    };
}


export function receiveQuestions(questions, authedUser){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
        authedUser
    }
};
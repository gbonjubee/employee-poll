import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

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
    return (dispatch) => {
      dispatch(showLoading());
      return saveQuestion(question)
        .then((question) => dispatch(createQuestion(question)))
        .then(() => dispatch(hideLoading()));
    };
  }


export function answerQuestion({qid, answer, authuser}){
    return{
        type: ANSWER_QUESTION,
        qid,
        answer,
        authuser,
    };
}

export function handleAnswerQuestion({qid, answer}){
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());

        return saveQuestionAnswer({
            authedUser,
            qid, 
            answer 
        })
        .then(dispatch(answerQuestion({qid, answer, authedUser})))
        .then(() => dispatch(hideLoading()));
    };
}


export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
};
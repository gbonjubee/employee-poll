import { CREATE_QUESTION, ANSWER_QUESTION, RECEIVE_QUESTIONS } from "../actions/questions";

const QUESTION = (state = {}, action) => {
    console.log(action)
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case CREATE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            };
        case ANSWER_QUESTION:
                return {
                  ...state,
                  [action.id]: {
                    ...state[action.id],
                    [action.answer]: {
                      ...state[action.id][action.answer],
                      votes: state[action.id][action.answer].votes.concat([action.authedUser]),
                    },
                  },
            };   
         default:
            return state;
    }
}

export default QUESTION;
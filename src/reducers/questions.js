import { CREATE_QUESTION, ANSWER_QUESTION, RECEIVE_QUESTIONS } from "../actions/questions";

const QUESTION = (state = {}, action) => {
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
            const { qid, answer, authedUser } = action;
                return {
                  ...state,
                  [qid]: {
                    ...state[qid],
                    [answer]: {
                      ...state[qid][answer],
                      votes: state[qid][answer].votes.concat([authedUser]),

                    },
                  },
            };   
         default:
            return state;
    }
}

export default QUESTION;
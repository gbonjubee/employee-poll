import { CREATE_POLL, ANSWER_POLL, FETCH_POLLS } from "../actions/questions";

const createPoll = (state = {}, action) => {
    switch(action.type){
        case FETCH_POLLS:
            return {
                ...state,
                ...action.questions,
            }
        case CREATE_POLL:
            return {
                ...state,
                [action.question.id]: action.question,
            };
        case ANSWER_POLL:
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
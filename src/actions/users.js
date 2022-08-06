export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USERS_ANSWER = "ADD_USERS_ANSWER";
export const ADD_USERS_POLL = "ADD_USERS_POLL"

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
};

export function addUsersAnswer({ answer, qid, authedUser }) {
    return ({
        type: ADD_USERS_ANSWER,
        answer,
        authedUser,
        qid,
    })
}

export function addQuestionToUser(question) {
    return ({
      type: ADD_USERS_POLL,
      authedUser: question.author,
      id: question.id
    });
  }

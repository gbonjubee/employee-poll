export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USERS_ANSWER= "ADD_USERS_ANSWER";

export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users
    }
};





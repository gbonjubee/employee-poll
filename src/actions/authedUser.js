export const SET_AUTH_USER = "SET_AUTH_USER"
export const LOGIN = "LOGIN"

export function setAuthedUser(id){
    return {
        type: SET_AUTH_USER,
        id
    }
}

export function userLogin({username, password, id}){
    return {
        type: LOGIN,
        username,
        password,
        id
    }
}

export const handleUserLogin = (AUTHED_ID) => {
    return (dispatch) => {
      dispatch(setAuthedUser(AUTHED_ID))
    }
}
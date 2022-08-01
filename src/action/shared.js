import { setAuthedUser } from "./authedUser";
import { receiveUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const handleUserLogin = (AUTHED_ID) => {
    return (dispatch) => {
      dispatch(setAuthedUser(AUTHED_ID))
    }
}
  
export function handleInitialData() {
    return (dispatch) => {
      dispatch(showLoading());  
      return getInitialData().then(({ users }) => {
        dispatch(receiveUsers(users));
        dispatch(hideLoading());
      });
    };
  }
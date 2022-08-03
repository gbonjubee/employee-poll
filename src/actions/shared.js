import { setAuthedUser } from "./authedUser";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions"
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getInitialData } from "../utils/api";

export const handleUserLogin = (AUTHED_ID) => {
    return (dispatch) => {
      dispatch(setAuthedUser(AUTHED_ID))
    }
}
  
export function handleInitialData() {
    return (dispatch) => {
      dispatch(showLoading());  
      const initialData = getInitialData().then(({ users, questions}) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      });
      return initialData;
    };
  }





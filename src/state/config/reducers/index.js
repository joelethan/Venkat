import { combineReducers } from "redux";
import data from "./dataReducer";

const appReducer = combineReducers({
  data,
});

const rootReducer = (state, actions) => {
  // if (actions.type === authActions.LOGOUT_SUCCESS) {
  //   // eslint-disable-next-line no-param-reassign
  //   state = {};
  // }

  return appReducer(state, actions);
};

export default rootReducer;

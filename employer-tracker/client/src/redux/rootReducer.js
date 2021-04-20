import { combineReducers } from "redux";
import { formReducer } from "./reducer/formReducer";

export const rootReducer = combineReducers({
  form: formReducer,
});

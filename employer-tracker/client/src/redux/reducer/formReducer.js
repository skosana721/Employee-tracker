import { GET_EMPLOYEE } from "../actionTypes/form";

const initialState = {
  form: [],
};
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE:
      console.log("payload", action.payload);
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
};

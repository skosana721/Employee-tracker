import { GET_EMPLOYEE } from "../actionTypes/form";

const initialState = {
  form: [],
};
export const formReducer = (state = initialState, action) => {
  switch (action) {
    case GET_EMPLOYEE:
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
};

import { GET_EMPLOYEE } from "../actionTypes/form";

const initialState = {
  form: [],
};
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        form: action.payload,
      };
    case "ADD_EMPLOYEE":
      return {
        ...state,
        form: [...state.form, action.payload],
      };
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        form: state.form.filter((employee) => employee.id !== action.payload),
      };
    default:
      return state;
  }
};

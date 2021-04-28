import {
  GET_EMPLOYEE,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
  COMPLETED,
} from "../actionTypes/form";

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
    case ADD_EMPLOYEE:
      return {
        ...state,
        form: [...state.form, action.payload],
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        form: state.form.filter((employee) => employee.id !== action.payload),
      };
    case EDIT_EMPLOYEE:
      const { id, edit } = action.payload;
      return {
        ...state,
        form: state.form.map((employee) => {
          if (employee.id === id) {
            return {
              ...employee,
              progress: edit,
            };
          }
          return employee;
        }),
      };
    case COMPLETED:
      return state;
    default:
      return state;
  }
};

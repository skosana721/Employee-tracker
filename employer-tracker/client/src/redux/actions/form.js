import axios from "axios";
import { ADD_EMPLOYEE } from "../actionTypes/form";
export const addEmployee = (data) => {
  return (dispatch) => {
    axios.get("http://localhost:6000/api/employee").then((res) => {
      dispatch({
        type: ADD_EMPLOYEE,
        payload: res.data,
      });
    });
  };
};

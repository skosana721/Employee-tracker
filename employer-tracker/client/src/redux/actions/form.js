import axios from "axios";
import { GET_EMPLOYEE } from "../actionTypes/form";

export const getEmployee = () => {
  return (dispatch) => {
    axios.get("http://localhost:5000/api/employee").then((res) => {
      console.log("res", res.data);
      dispatch({
        type: GET_EMPLOYEE,
        payload: res.data,
      });
    });
  };
};

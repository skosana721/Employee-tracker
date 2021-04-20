import axios from "axios";
import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  GET_EMPLOYEE,
} from "../actionTypes/form";

export const getEmployee = () => {
  return (dispatch) => {
    axios.get("http://localhost:5000/api/employee").then((res) => {
      dispatch({
        type: GET_EMPLOYEE,
        payload: res.data,
      });
    });
  };
};

export const addEmployee = (form) => {
  return (dispatch) => {
    axios.post("http://localhost:5000/api/employee", { form }).then((res) => {
      dispatch({
        type: ADD_EMPLOYEE,
        payload: res.data,
      });
    });
  };
};

export const deleteEmployee = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:5000/api/employee/${id}`).then((res) => {
      dispatch({
        type: DELETE_EMPLOYEE,
        patch: res.data,
      });
    });
  };
};

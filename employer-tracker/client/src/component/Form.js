import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmployee, getEmployee } from "../redux/actions/form";

function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    progress: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployee());
  }, [dispatch, formInfo]);
  const { name, surname, progress } = formInfo;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    const { name, surname, progress } = formInfo;
    e.preventDefault();
    if ((name, surname, progress)) {
      dispatch(addEmployee(formInfo));
      setFormInfo({
        name: "",
        surname: "",
        progress: "",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={name}
        />
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          name="surname"
          id="surname"
          onChange={handleChange}
          value={surname}
        />
        <label htmlFor="">Progress</label>
        <input
          type="text"
          name="progress"
          id="progress"
          onChange={handleChange}
          value={progress}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

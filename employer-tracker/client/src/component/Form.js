import React, { useState } from "react";

function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    progress: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSumit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSumit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          name="surname"
          id="surname"
          onChange={handleChange}
        />
        <label htmlFor="">Progress</label>
        <input
          type="text"
          name="progress"
          id="progress"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

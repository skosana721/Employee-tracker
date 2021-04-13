import React, { useState } from "react";

function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    progress: "",
  });
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="surname">Surname</label>
        <input type="text" name="surname" id="surname" />
        <label htmlFor="">Progress</label>
        <input type="text" name="progress" id="progress" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

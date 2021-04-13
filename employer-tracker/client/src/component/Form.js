import React from "react";

function Form() {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="surname">Surname</label>
        <input type="text" name="surname" id="surname" />
        <label htmlFor="">Progress</label>
        <input type="text" name="progress" id="progress" />
      </form>
    </div>
  );
}

export default Form;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editEmployee } from "../redux/actions/form";

function EditProgress({ id, progress, updateValue }) {
  const [edit, setEdit] = useState(progress);
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.form.form);

  //   const updateValue = (id) => {
  //     let currentProgress;
  //     let selectedEmployee = employees.find((employee) => employee.id === id);
  //     console.log("selected", selectedEmployee);
  //     if (selectedEmployee) {
  //       currentProgress = selectedEmployee.progress;
  //     }
  //     currentProgress = edit;
  //     return { currentProgress, id };
  //   };

  const handleEdit = (e) => {
    e.preventDefault();
    let found = employees.filter((employee) => employee.id === id);
    let data = updateValue(id, edit);
    if (found) {
      dispatch(editEmployee(data));
    }
  };
  console.log("value", updateValue(id, edit));
  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          name="edit"
          onChange={(e) => setEdit(e.target.value)}
          value={edit}
        />
        <button type="submit">update</button>
      </form>
    </div>
  );
}

export default EditProgress;

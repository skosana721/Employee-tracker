import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editEmployee } from "../redux/actions/form";

function EditProgress({ id, progress, updateValue }) {
  const [edit, setEdit] = useState(progress);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editEmployee({ id, edit }));
  };

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
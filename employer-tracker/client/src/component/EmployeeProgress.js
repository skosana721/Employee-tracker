import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { completed, deleteEmployee, editEmployee } from "../redux/actions/form";
import { Table } from "reactstrap";
import EditProgress from "./EditProgress";

function EmployeeProgress() {
  const employees = useSelector((state) => state.form.form);

  const dispatch = useDispatch();
  const [edit, setEdit] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  const handelComplete = (id) => {
    employees.map((employee) => {
      if (employee.id === id) {
        let newData = { ...employee, isCompleted: !employee.isCompleted };
        return dispatch(completed(newData));
      }

      return employee;
    });
  };

  const updateValue = (id, edit) => {
    let currentProgress;
    let selectedEmployee = employees.find((employee) => employee.id === id);
    console.log("selected", selectedEmployee);
    if (selectedEmployee) {
      currentProgress = selectedEmployee.progress;
    }
    currentProgress = edit;
    return { currentProgress, id };
  };
  console.log(employees);

  return (
    <div className="display-table">
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Progress</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 &&
            employees.map((employee) => {
              const { id, name, surname, progress, isCompleted } = employee;
              console.log("employee", id);
              return (
                <tr key={id} className={`${isCompleted ? "complete" : ""} `}>
                  <td>{name}</td>
                  <td>{surname}</td>
                  <td>
                    {!isEditable ? (
                      progress
                    ) : (
                      <EditProgress {...employee} updateValue={updateValue} />
                    )}
                  </td>
                  <button onClick={() => dispatch(deleteEmployee(id))}>
                    Delete
                  </button>
                  {
                    <div>
                      <button onClick={() => setIsEditable(!isEditable)}>
                        Edit
                      </button>
                      <button onClick={() => handelComplete(id)}>
                        Complete
                      </button>
                    </div>
                  }
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeeProgress;

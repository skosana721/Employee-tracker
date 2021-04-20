import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/actions/form";
import { Table } from "reactstrap";

function EmployeeProgress() {
  const employees = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const [complete, setComplete] = useState(false);
  const completed = () => {
    setComplete(!completed);
    if (complete) {
      return {
        textDecoration: "line-through double red",
      };
    }
  };
  const foundEmployee = (id) => {
    let found = employees.find((employee) => employee.id === id);
    if (found) {
      completed();
    }
  };
  return (
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
        {employees.length !== 0 &&
          employees.map((employee) => {
            const { id, name, surname, progress } = employee;

            return (
              <tr key={id} style={completed()}>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{progress}</td>
                {!complete && (
                  <div>
                    <button onClick={() => dispatch(deleteEmployee(id))}>
                      Delete
                    </button>

                    <button onClick={() => foundEmployee(id)}>Complete</button>
                  </div>
                )}
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default EmployeeProgress;

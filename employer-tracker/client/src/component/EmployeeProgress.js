import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/actions/form";
import { Table } from "reactstrap";

function EmployeeProgress() {
  const employees = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
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
              <tr key={id}>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{progress}</td>
                <td>
                  <button onClick={() => dispatch(deleteEmployee(id))}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default EmployeeProgress;

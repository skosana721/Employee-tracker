import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

function EmployeeProgress() {
  const employees = useSelector((state) => state.form.form);
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
        {employees.map((employee) => {
          const { id, name, surname, progress } = employee;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{surname}</td>
              <td>{progress}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default EmployeeProgress;

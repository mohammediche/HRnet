import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const employees = useSelector((state) => state.employee);
  const test = useSelector((state) => state.employee);
  console.log("test récup data", test);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>BirthDate</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.startDate}</td>
                <td>{val.department}</td>
                <td>{val.birthDate}</td>
                <td>{val.street}</td>
                <td>{val.city}</td>
                <td>{val.state}</td>
                <td>{val.zipCode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;

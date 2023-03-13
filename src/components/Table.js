import React from "react";
import { useSelector } from "react-redux";
import { RiArrowUpDownLine } from "react-icons/ri";

const Table = () => {
  const employees = useSelector((state) => state.employee);
  const tableSteps = useSelector((state) => state.step);

  const pageSize = 10; // nombre d'éléments par page

  // extraire les éléments de la page actuelle
  const debut = (tableSteps - 1) * pageSize;
  const fin = debut + pageSize;
  const employeesAAfficher = employees.slice(debut, fin);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>
              <button className="filter_table_button">
                First Name
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button">
                Last Name
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button">
                Start Date
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button">
                Department
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button">
                BirthDate
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button">
                Street
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button">
                City
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button">
                State
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button">
                Zip Code
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {employeesAAfficher.map((val, key) => {
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

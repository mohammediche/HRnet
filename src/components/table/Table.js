import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployeesList } from "../../store/feature/Employee.actions";
import TableHeader from "./TableHeader";

const Table = ({ filteredDataOnSearch }) => {
  const keyRef = useRef("");
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee);
  const [handleTrie, setHandleTrie] = useState(false);

  //const tableSteps = useSelector((state) => state.step);
  //const pageSize = 10; // nombre d'éléments par page

  // extraire les éléments de la page actuelle
  // const debut = (tableSteps - 1) * pageSize;
  // const fin = debut + pageSize;
  // const employeesAAfficher = employees.slice(debut, fin);

  // crée une fonction qui traite les date (fitre etc...)
  /*formatDate = ()=>{

  }*/

  const compareValues = (a, b) => {
    let nameA;
    let nameB;
    if (Date.parse(a[keyRef.current])) {
      const dateASplit = a[keyRef.current].split("/");
      const dateBSplit = b[keyRef.current].split("/");
      nameA = `${dateASplit[2]}-${dateASplit[1]}-${dateASplit[0]}`.toUpperCase();
      nameB = `${dateBSplit[2]}-${dateBSplit[1]}-${dateBSplit[0]}`.toUpperCase();
    } else {
      nameA = `${a[keyRef.current]}`.toUpperCase();
      nameB = `${b[keyRef.current]}`.toUpperCase();
    }
    setHandleTrie(!handleTrie);

    console.log("newFormat_DateA=>>>>>", nameA);
    console.log("newFormat_DateB=><<<", nameA);

    if (nameA < nameB) {
      return handleTrie ? -1 : 1;
    }
    if (nameA > nameB) {
      return handleTrie ? 1 : -1;
    }

    return 0;
  };

  const trier = (key) => {
    // setKey(key);
    // const sortEmployees = [...employees].sort(compareValues);
    // dispatch(updateEmployeesList(sortEmployees));
    if (keyRef.current === key) {
      setHandleTrie(!handleTrie);
    } else {
      setHandleTrie(true);
      keyRef.current = key;
    }
    const sortEmployees = [...employees].sort(compareValues);
    dispatch(updateEmployeesList(sortEmployees));
  };

  const keys = ["firstName", "lastName", "startDate", "department", "birthDate", "street", "city", "state", "zipCode"];

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {keys.map((val) => {
              return <TableHeader val={val} trier={trier} />;
            })}
          </tr>
          {/* <tr>
            <th>
              <button className="filter_table_button" onClick={() => trier("firstName")}>
                First Name
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button" onClick={() => trier("lastName")}>
                Last Name
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button" onClick={() => trier("startDate")}>
                Start Date
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button" onClick={() => trier("department")}>
                Department
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button" onClick={() => trier("birthDate")}>
                BirthDate
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button" onClick={() => trier("street")}>
                Street
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button" onClick={() => trier("city")}>
                City
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button" onClick={() => trier("state")}>
                State
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
            <th>
              <button className="filter_table_button" onClick={() => trier("zipCode")}>
                Zip Code
                <RiArrowUpDownLine className="arrows_icon" />
              </button>
            </th>
          </tr> */}
        </thead>
        <tbody>
          {filteredDataOnSearch.map((val, key) => {
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

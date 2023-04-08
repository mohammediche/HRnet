import React, { useState, useRef } from "react";
import TableHeader from "./TableHeader";

const Table = ({ employees }) => {
  const keyRef = useRef("");
  const [handleTrie, setHandleTrie] = useState(false);

  const compareValues = (a, b) => {
    let nameA;
    let nameB;

    if (typeof a[keyRef.current] === "string" && Date.parse(a[keyRef.current])) {
      nameA = new Date(a[keyRef.current]).getTime();
      nameB = new Date(b[keyRef.current]).getTime();
    } else {
      // console.log("not");
      nameA = `${a[keyRef.current]}`.toUpperCase();
      nameB = `${b[keyRef.current]}`.toUpperCase();
    }
    setHandleTrie(!handleTrie);

    if (nameA < nameB) {
      return handleTrie ? -1 : 1;
    }
    if (nameA > nameB) {
      return handleTrie ? 1 : -1;
    }

    return 0;
  };

  const trier = (key, ordreTrie) => {
    if (keyRef.current === key) {
      setHandleTrie(!handleTrie);
    } else {
      setHandleTrie(true);
      keyRef.current = key;
    }
    employees.sort(compareValues);
    // const sortEmployees = [...employees].sort(compareValues);
  };
  const keys = [
    { label: "First Name", value: "firstName" },
    { label: "Last Name", value: "lastName" },
    { label: "Start Date", value: "startDate" },
    { label: "Department", value: "department" },
    { label: "BirthDate", value: "birthDate" },
    { label: "Street", value: "street" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
    { label: "Zip Code", value: "zipCode" },
  ];

  // on change le format de date pour l'affichage selon la maquette
  const formatDate = (value) => {
    const dateSplit = value.split("-");
    const newFormat_Date = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
    return newFormat_Date;
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {keys.map((val) => {
              return <TableHeader val={val} trier={trier} ordreTrie={false} />;
            })}
          </tr>
        </thead>
        <tbody>
          {employees.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{formatDate(val.startDate)}</td>
                <td>{val.department}</td>
                <td>{formatDate(val.birthDate)}</td>
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

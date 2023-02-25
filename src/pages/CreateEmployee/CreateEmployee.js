import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import { BsFillPeopleFill } from "react-icons/bs";
import DropDown from "../../components/DropDown";
import { StateNames } from "../../data/States";
import { Departements } from "../../data/Departements";
import DataPicker from "../../components/DataPicker";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [employeeDetails, setEmployeeDetails] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: 0,
    department: "",
  });

  // passer cette fonction en props sur DataPicker et les 2 DropDown avec les states necessaire !!!
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(employeeDetails);
    alert("Employee Created!");
    // Une fois que j'aurais crée la modal en librairie, je l'affiche ici à la place de alert
  };
  return (
    <div>
      <header className="title">
        <h1>HRnet</h1>
      </header>
      <a href="/employee-list" className="navigate_To_EmployeeList">
        View Current Employees
        <BsFillPeopleFill />
      </a>
      <main className="container">
        <h2>Create Employee</h2>
        <hr className="hr" />

        <form id="create-employee" onSubmit={handleSubmit}>
          <h3 className="form_titlesH3">Personal information</h3>
          <hr className="hr_mini" />
          <div className="form-group">
            <label htmlFor="firstName">First Name :</label>
            <input type="text" id="name" name="firstName" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">Last Name :</label>
            <input type="text" id="last-name" name="last-name" required onChange={handleInputChange} />
          </div>

          <DataPicker />

          <div className="form-group">
            <label htmlFor="start-date">Start Date</label>
            <input type="text" id="start-date" name="start-date" required onChange={handleInputChange} />
          </div>

          <h3 className="form_titlesH3">Contact information</h3>
          <hr className="hr_mini" />

          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input type="text" id="street" name="street" required onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required onChange={handleInputChange} />
          </div>

          <DropDown data={StateNames} name="State" />

          <div className="form-group">
            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="number"
              id="zip-code"
              name="zip-code"
              className="field_Style"
              required
              onChange={handleInputChange}
            />
          </div>

          <DropDown data={Departements} name="Department" />

          <div className="div-submit">
            <button type="submit" className="btn-submit">
              Save
            </button>
          </div>
        </form>
      </main>
      {/* <div id="confirmation" className="modal">Employee Created!</div> */}
    </div>
  );
};

export default CreateEmployee;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import { BsFillPeopleFill } from "react-icons/bs";
import DropDown from "../../components/DropDown";
import { States } from "../../data/States";
import { Departements } from "../../data/Departements";
import DatePicker from "../../components/DatePicker";
import { getEmployees } from "../../store/feature/Employee.actions";
import Modal from "../../components/Modal";

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
  const [handleModal, setHandleModal] = useState(false);

  // passer cette fonction en props sur DatePicker et les 2 DropDown avec les states necessaire !!!
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "zipCode") {
      setEmployeeDetails((prevState) => ({
        ...prevState,
        [name]: parseInt(value),
      }));
    } else {
      setEmployeeDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getEmployees(employeeDetails));
    // alert("Employee Created!");
    setHandleModal(true);
  };
  const closeModal = () => {
    setHandleModal(false);
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
            <input type="text" id="name" name="firstName" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name :</label>
            <input type="text" id="lastName" name="lastName" onChange={handleInputChange} />
          </div>

          <DatePicker />

          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input type="text" id="startDate" name="startDate" onChange={handleInputChange} />
          </div>

          <h3 className="form_titlesH3">Contact information</h3>
          <hr className="hr_mini" />

          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input type="text" id="street" name="street" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label htmlFor={"state"}>State</label>
            <DropDown data={States} name="state" handleInputChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">Zip Code</label>
            <input type="number" id="zipCode" name="zipCode" className="field_Style" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label htmlFor={"department"}>Department</label>
            <DropDown data={Departements} name="department" handleInputChange={handleInputChange} />
          </div>

          <div className="div-submit">
            <button type="submit" className="btn-submit">
              Save
            </button>
          </div>
        </form>
      </main>
      {handleModal && (
        <div className="container_modal">
          <Modal closeModal={closeModal} />
        </div>
      )}
      {/* <div id="confirmation" className="modal">Employee Created!</div> */}
    </div>
  );
};

export default CreateEmployee;

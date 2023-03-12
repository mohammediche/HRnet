import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <button className="close_modal_button" onClick={closeModal}>
        <AiFillCloseCircle />
      </button>
      <img className="img_modal" src="https://cdn-icons-png.flaticon.com/512/3789/3789820.png" alt="cookies-img" />
      <p>Employee Created!</p>
      <a className="navigate_to_employeeList" href="/employee-list">
        View Current Employees
      </a>
    </div>
  );
};

export default Modal;

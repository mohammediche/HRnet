import React from "react";
import "./style.css";
import { AiFillHome } from "react-icons/ai";
import Table from "../../components/Table";

const EmployeeList = () => {
  return (
    <div>
      <header className="title">
        <h1>HRnet</h1>
      </header>
      <a href="/" className="navigate">
        Home
        <AiFillHome />
      </a>
      <main className="container greater_width">
        <Table />
      </main>
      {/* <div id="confirmation" className="modal">Employee Created!</div> */}
    </div>
  );
};

export default EmployeeList;

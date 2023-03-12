import React from "react";
import "./style.css";
import { AiFillHome } from "react-icons/ai";
import Table from "../../components/Table";
import PrevNextButtons from "../../components/PrevNextButtons";

const EmployeeList = () => {
  return (
    <div>
      <header className="title">
        <h1>HRnet</h1>
      </header>
      <a href="/" className="navigate_To_EmployeeList">
        Home
        <AiFillHome />
      </a>
      <main className="container greater_width">
        <Table />
        <PrevNextButtons />
      </main>
      {/* <div id="confirmation" className="modal">Employee Created!</div> */}
    </div>
  );
};

export default EmployeeList;

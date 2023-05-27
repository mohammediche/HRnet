import React, { useEffect, useState } from "react";
import "./style.css";
import { AiFillHome } from "react-icons/ai";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/Search";
import { useDispatch, useSelector } from "react-redux";
import SelectEntries from "../../components/selectEntries/SelectEntries";
import { goToStep } from "../../store/feature/Employee.actions";

const EmployeeList = () => {
  const employees_store = useSelector((state) => state.employee);
  const step = useSelector((state) => state.step);
  //const defaultSize = employees_store.length;
  const [nombreTotalElementAfficher, setNombreTotalElementAfficher] = useState(employees_store.length);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState([]);
  const [pageSize, setPageSize] = useState(5); // nombre d'éléments par page

  const debut = (step - 1) * pageSize;
  const fin = debut + pageSize;

  useEffect(() => {
    setEmployees(employees_store);
  }, [employees_store]);

  useEffect(() => {
    const filteredBySearch = employees_store?.filter((item) => {
      // Vérifier si la valeur de recherche correspond à l'une des valeurs de chaque élément du tableau
      /* On filtre le tableau,
       * on utilise Object.values pour récupérer seulement les valeur des objets
       * on transforme ses valeurs en string, et en miniscule,
       * puis on vérifie si elle contiennent le text de la searchBar.
       * Et enfin ca nous return un nouveau tableau **/
      return Object.values(item).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()));
    });
    //setEmployees(filteredBySearch);
    setNombreTotalElementAfficher(filteredBySearch.length);
    //
    const employeesSelection = filteredBySearch.slice(debut, fin);
    setEmployees(employeesSelection);
  }, [employees_store, searchTerm]);

  // select entriees
  useEffect(() => {
    const employeesSelection = employees_store.slice(debut, fin);
    setEmployees(employeesSelection);
  }, [debut, fin, employees_store]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleEntries = (e) => {
    const value = parseInt(e.target.value);
    setPageSize(value);
    dispatch(goToStep(1));
  };

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
        <div className="allContent_data_table">
          <SelectEntries handleEntries={handleEntries} />
          <Search handleSearch={handleSearch} />
          <Table employees={employees} />
          <div className="footer_container">
            <Pagination fin={fin} pageSize={pageSize} size={nombreTotalElementAfficher} />
            <div>
              {employees.length > 0 ? (
                <p>
                  Showing {debut + 1} to {fin < employees_store.length ? fin : employees_store.length} of{" "}
                  {employees_store.length} entries
                </p>
              ) : (
                <p>Showing 0 to 0 of 0 entries</p>
              )}
              {/* <p>Showing 1 to 3 of 3 entries (filtered from 41 total entries)</p> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeList;

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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const [pageSize, setPageSize] = useState(5); // nombre d'éléments par page

  const employees = useSelector((state) => state.employee);
  const step = useSelector((state) => state.step);
  const dispatch = useDispatch();

  const debut = (step - 1) * pageSize;
  const fin = debut + pageSize;
  // arrondir le nombre au supérieur
  const nombrePageArrondi = Math.ceil(employees.length / pageSize);
  // crée un tableau contenant des nombres de 1 à nombrePageArrondi
  const tableauDeNombresDePage = Array.from({ length: nombrePageArrondi }, (_, i) => i + 1);

  useEffect(() => {
    const filtered = employees.filter((item) => {
      // Vérifier si la valeur de recherche correspond à l'une des valeurs de chaque élément du tableau
      /* On filtre le tableau,
       * on utilise Object.values pour récupérer seulement les valeur des objets
       * on transforme ses valeurs en string, et en miniscule,
       * puis on vérifie si elle contiennent le text de la searchBar.
       * Et enfin ca nous return un nouveau tableau **/
      return Object.values(item).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()));
    });
    setFilteredEmployees(filtered);
  }, [employees, searchTerm]);

  useEffect(() => {
    const sliced = employees.slice(debut, fin);
    setFilteredEmployees(sliced);
  }, [step, pageSize]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleEntries = (e) => {
    const value = parseInt(e.target.value);
    setPageSize(value);
    dispatch(goToStep(1));
  };

  console.log("step actuel", step);
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
        <SelectEntries handleEntries={handleEntries} />
        <Search handleSearch={handleSearch} />
        <Table filteredEmployees={filteredEmployees} />
        <Pagination fin={fin} tableauDeNombresDePage={tableauDeNombresDePage} />
      </main>
    </div>
  );
};

export default EmployeeList;

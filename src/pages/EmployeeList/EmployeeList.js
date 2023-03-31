import React, { useState } from "react";
import "./style.css";
import { AiFillHome } from "react-icons/ai";
import Table from "../../components/table/Table";
import PrevNextButtons from "../../components/PrevNextButtons";
import Search from "../../components/Search";
import { useSelector } from "react-redux";

const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const employees = useSelector((state) => state.employee);
  const filteredEmployees = employees.filter((item) => {
    // Vérifier si la valeur de recherche correspond à l'une des valeurs de chaque élément du tableau
    /* On filtre le tableau,
     * on utilise Object.values pour récupérer seulement les valeur des objets
     * on transforme ses valeurs en string, et en miniscule,
     * puis on vérifie si elle contiennent le text de la searchBar.
     * Et enfin ca nous return un nouveau tableau **/
    return Object.values(item).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()));
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
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
        <Search handleSearch={handleSearch} />
        <Table filteredEmployees={filteredEmployees} />
        <PrevNextButtons />
      </main>
    </div>
  );
};

export default EmployeeList;

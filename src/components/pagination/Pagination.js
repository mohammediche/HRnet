import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { goToNextStep, goToPreviousStep, goToStep } from "../../store/feature/Employee.actions";

function Pagination({ fin, pageSize, size }) {
  const dispatch = useDispatch();
  const employees_store = useSelector((state) => state.employee);
  const step = useSelector((state) => state.step);
  const [tableauDeNombresDePage, setTableauDeNombresDePage] = useState([]);

  const nextPage = () => {
    dispatch(goToNextStep());
  };

  const prevPage = () => {
    dispatch(goToPreviousStep());
  };

  useEffect(() => {
    // arrondir le nombre au supérieur
    const nombrePageArrondi = Math.ceil(size / pageSize);
    // crée un tableau contenant des nombres de 1 à nombrePageArrondi
    const tableauDeNombresDePage = Array.from({ length: nombrePageArrondi }, (_, i) => i + 1);
    console.log("nombrePageArrondi=>", nombrePageArrondi);
    setTableauDeNombresDePage(tableauDeNombresDePage);
  }, [size, pageSize]);

  return (
    <div className="pagination">
      <button
        className="prev_next_navigation"
        disabled={step === 1 || tableauDeNombresDePage.length < 1}
        onClick={prevPage}
      >
        Précédent
      </button>
      {tableauDeNombresDePage.length > 1 &&
        tableauDeNombresDePage.map((page, key) => {
          return (
            <button
              className="navigation_numbers"
              key={key}
              disabled={page === step}
              onClick={() => dispatch(goToStep(page))}
            >
              {page}
            </button>
          ); // disabled={step === 1}
        })}
      <button className="prev_next_navigation" disabled={fin >= size} onClick={nextPage}>
        Suivant
      </button>
    </div>
  );
}

export default Pagination;

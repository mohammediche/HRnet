import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { goToNextStep, goToPreviousStep, goToStep } from "../../store/feature/Employee.actions";

function Pagination({ fin, pageSize, employees }) {
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
    if (employees.length > 0) {
      // arrondir le nombre au supérieur
      const nombrePageArrondi = Math.ceil(employees.length / pageSize);
      // crée un tableau contenant des nombres de 1 à nombrePageArrondi
      const tableauDeNombresDePage = Array.from({ length: nombrePageArrondi }, (_, i) => i + 1);
      console.log("nombrePageArrondi=>", nombrePageArrondi);
      setTableauDeNombresDePage(tableauDeNombresDePage);
    }
  }, [employees, pageSize]);

  return (
    <div>
      <button disabled={step === 1} onClick={prevPage}>
        Précédent
      </button>
      {tableauDeNombresDePage.length > 1 &&
        tableauDeNombresDePage.map((page, key) => {
          return (
            <button key={key} disabled={page === step} onClick={() => dispatch(goToStep(page))}>
              {page}
            </button>
          ); // disabled={step === 1}
        })}
      <button disabled={fin >= employees.length} onClick={nextPage}>
        Suivant
      </button>
    </div>
  );
}

export default Pagination;

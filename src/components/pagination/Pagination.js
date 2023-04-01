import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { goToNextStep, goToPreviousStep, goToStep } from "../../store/feature/Employee.actions";

function Pagination({ fin, tableauDeNombresDePage }) {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee);
  const step = useSelector((state) => state.step);

  const nextPage = () => {
    dispatch(goToNextStep());
  };

  const prevPage = () => {
    dispatch(goToPreviousStep());
  };

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

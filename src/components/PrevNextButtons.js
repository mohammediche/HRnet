import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "../store/feature/Employee.actions";

function PrevNextButtons() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee);
  const tableSteps = useSelector((state) => state.step);

  const pageSize = 10; // nombre d'éléments par page

  // fonction pour aller à la page suivante
  function pageSuivante() {
    dispatch(nextStep());
  }

  // fonction pour aller à la page précédente
  function pagePrecedente() {
    dispatch(prevStep());
  }

  // extraire les éléments de la page actuelle
  const debut = (tableSteps - 1) * pageSize;
  const fin = debut + pageSize;

  // afficher les éléments de la page actuelle et les boutons de navigation
  return (
    <div>
      <button disabled={tableSteps === 1} onClick={pagePrecedente}>
        Précédent
      </button>
      <button disabled={fin >= employees.length} onClick={pageSuivante}>
        Suivant
      </button>
    </div>
  );
}

export default PrevNextButtons;

/*
 const liste = [
    {
      title: "hello 1",
      text: "lorem 1",
    },
    {
      title: "hello 13434",
      text: "lorem 1",
    },
    {
      title: "hello 13434",
      text: "lorem 1",
    },
    {
      title: "hello 1",
      text: "lorem 1zfZFZEFezf",
    },
    {
      title: "hellfze4564o 1",
      text: "loremZFZEFEZ 1",
    },
    {
      title: "helloRTRE 1",
      text: "lorR435em 1",
    },
    {
      title: "helloFEF 1",
      text: "lorem 571",
    },
    {
      title: "hello 71",
      text: "lorem 71",
    },
    {
      title: "hello 7888",
      text: "lorem 8!",
    },
    {
      title: "hello 1",
      text: "lorem 1646",
    },
    {
      title: "hello ERER1",
      text: "lorem 1",
    },
    {
      title: "helvvvlo 34343",
      text: "lorem 1",
    },
    {
      title: "hedvvvllo 1",
      text: "lorem 1",
    },
    {
      title: "hezefefllo 1",
      text: "lorem 1",
    },
    {
      title: "hefzefzefllo 1fezfe",
      text: "lorem 1",
    },
    {
      title: "hecdlo 145G",
      text: "loreecem 4331",
    },
    {
      title: "hcdcdllo 13434",
      text: "lorem 1",
    },
    {
      title: "hello 1'3434",
      text: "lorem 1",
    },
    {
      title: "helefzfzeflo 1",
      text: "lorfergzgzfeem 1",
    },
    {
      title: "hefrgrzgrzgzefef",
      text: "lorefefefezfzm 1",
    },
    {
      title: "hefzefzeflldzdzgo 1fezfe",
      text: "lorem 1",
    },
    {
      title: "hecdG",
      text: "loreecem 4331",
    },
    {
      title: "hcdcdllo 13434",
      text: "lorem 1",
    },
    {
      title: "3434",
      text: "lorem 1",
    },
    {
      title: "heqqqqqlefzfzeflo 1",
      text: "lorfefeem 1",
    },
    {
      title: "hefdddddefef",
      text: "lorefefdddddddefezfzm 1",
    },
  ];
*/

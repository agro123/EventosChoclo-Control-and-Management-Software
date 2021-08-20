import React from "react";
import { inicio } from "./manejoFechas";
import PropTypes from "prop-types";

const CardDate = ({
  semana = inicio.semana,
  dia = inicio.dia,
  mes = inicio.mes,
  año = inicio.año,
  hora = inicio.hora,
}) => {
  return (
    <div>
      <div className="cardEv-date">
        <p>{semana == "undefined" ? inicio.semana : semana}</p>
        <p className="dia-cardEv">{dia}</p>
        <p>
          {mes + " "}
          {año}
        </p>
        <hr className="hr-cardDate" />
        <p>{hora}</p>
      </div>
    </div>
  );
};

CardDate.propTypes = {
  semana: PropTypes.string.isRequired,
  dia: PropTypes.number.isRequired,
  mes: PropTypes.string.isRequired,
  año: PropTypes.number.isRequired,
  hora: PropTypes.string.isRequired,
};

export default CardDate;

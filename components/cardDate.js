import React from "react";

const CardDate = ({ semana, dia, mes, año, hora }) => {
  return (
    <div>
      <div className="card-date">
        <h6>{semana}</h6>
        <h5 className="dia-cardEv">{dia}</h5>
        <h6>
          {mes + " "}
          {año}
        </h6>
        <hr className="hr-cardDate" />
        <h6>{hora}</h6>
      </div>
    </div>
  );
};

export default CardDate;

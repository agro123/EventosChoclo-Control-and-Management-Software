import React from "react";

const CardDate = ({ semana, dia, mes, año, hora }) => {
  return (
    <div>
      <div className="cardEv-date">
        <p>{semana}</p>
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

export default CardDate;

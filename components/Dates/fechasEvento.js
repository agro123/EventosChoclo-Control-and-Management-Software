import React from "react";
import { DatePicker } from "antd";
import CardDate from "./cardDate";
import { Typography } from "antd";

const FechasEvento = ({
  fecha,
  inputFecha,
  onChangeInicio,
  onChangeCierre,
}) => {
  const { Title } = Typography;

  return (
    <>
      <div className="options-right-h3 ">
        <div className="contenedorDate">
          <div className="right-date">
            <Title level={4}>Inicio</Title>

            <CardDate {...fecha.inicio} />
          </div>
          <div className="fecha">
            <DatePicker
              id="fechaInicio"
              name="inicio"
              value={inputFecha.inicio}
              onChange={onChangeInicio}
              className="place-pick"
              locale="es"
              placeholder="Fecha Incial"
              showTime
              format="YYYY-MM-DD HH:mm Z"
            />
          </div>
        </div>
        {fecha.error && (
          <span className="spanError">
            La fecha inicial debe ser antes de la de cierre
          </span>
        )}
        <div className="contenedorDate">
          <div className="right-date">
            <Title level={4}>Cierre</Title>
            <CardDate {...fecha.cierre} />
          </div>
          <div className="fecha">
            <DatePicker
              id="fechaCierre"
              name="cierre"
              value={inputFecha.cierre}
              onChange={onChangeCierre}
              className="place"
              placeholder="Fecha Cierre"
              showTime
              locale="es"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FechasEvento;

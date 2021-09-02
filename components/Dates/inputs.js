import React from "react";
import { Typography } from "antd";

const FormularioEventos = ({ register, errors }) => {
  const { Title } = Typography;
  return (
    <>
      <Title level={3}>Información General</Title>
      <div className="contenedor-inputs">
        <div className="inputs-info">
          <div className="inputs-info-right">
            <label htmlFor="lugar">{"Lugar: (*)"}</label>
            <input
              id="lugar"
              name="lugar"
              className="inputs-Eventos"
              {...register("lugar", { required: true })}
            />
            {errors.lugar && (
              <span className="spanError">Este campo es obligatorio</span>
            )}
            <label htmlFor="tematica">{"Tematica: (*)"}</label>
            <input
              id="tematica"
              name="tematica"
              className="inputs-Eventos"
              {...register("tematica", { required: true })}
            />
            {errors.tematica && (
              <span className="spanError">Este campo es obligatorio</span>
            )}
            <label htmlFor="direccion">{"Dirección: "}</label>
            <input
              id="direccion"
              name="direccion"
              className="inputs-Eventos"
              {...register("direccion")}
            />

            <label htmlFor="precioBol">{"Precio por Boleta: (*)"}</label>
            <input
              id="precioBol"
              className="inputs-Eventos"
              type="number"
              name="precioBol"
              {...register("precioBol", { required: true })}
            />
            {errors.precioBol && (
              <span className="spanError">Este campo es obligatorio</span>
            )}
          </div>
          
          <div className="inputs-info-left">
            <label htmlFor="aforo">{"Aforo: (*)"}</label>
            <input
              id="aforo"
              className="inputs-Eventos"
              type="number"
              name="aforo"
              {...register("aforo", { required: true })}
            />
            {errors.aforo && (
              <span className="spanError">Este campo es obligatorio</span>
            )}
            <label htmlFor="boletas">{"Boletas Permitidas: (*)"}</label>
            <input
              id="boletas"
              className="inputs-Eventos"
              type="number"
              name="boletas"
              {...register("boletas", { required: true })}
            />
            {errors.boletas && (
              <span className="spanError">Este campo es obligatorio</span>
            )}

            <label htmlFor="anfitrion">{"Anfitrión: "}</label>
            <input
              id="anfitrion"
              name="anfitrion"
              className="inputs-Eventos"
              {...register("anfitrion")}
            />
          </div>
        </div>
        <textarea
          className="input-textarea"
          placeholder="Descripción"
          name="descripcion"
          {...register("descripcion")}
        />
      </div>
    </>
  );
};

export default FormularioEventos;

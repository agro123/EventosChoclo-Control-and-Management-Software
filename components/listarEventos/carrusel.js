import React, { useContext, useEffect, useState } from "react";
import { Carousel, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { CardContext } from "../../context/cardContext";
import { getEventos } from "../database/eventosCrud";
import CrearEventos from "../../pages/CrearEventos";

const contentStyle = {
  height: "600px",
  background: "inherit",
};
const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;

export default function Carrusel() {
  const { eventos, changeData } = useContext(CardContext);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const data = await getEventos();
      if (data) {
        console.log("Informacion cargada:", data);
        changeData(data);
        setLoading(false);
      }
    } catch (e) {
      console.log("Ocurrio un error:", e);
      setLoading(false);
    }
  }, []);

  return (
    <div className="carruselEventoAdmin">
      <div className="carruselHeader">
        <h1>Eventos Actuales</h1>
        <h1>Crear Evento</h1>
      </div>
      <Carousel dotPosition="top" style={{ width: "900px" }}>
        <div className="listEventos">
          <Spin spinning={loading} indicator={antIcon}>
            <div className="list">{eventos}</div>
          </Spin>
        </div>
        <div>
          <div className="listEventos">
            <CrearEventos />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

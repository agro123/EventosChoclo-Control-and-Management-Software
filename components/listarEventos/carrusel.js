import React, { useContext } from "react";
import { Carousel, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import CrearEventos from "../../pages/crearevento";
import useGetData from '../../hooks/usegetdata';
import EventoCard from './eventocard';
import { ReloadContext } from '../../context/reloadcontext';

const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;

export default function Carrusel() {
  const { reload } = useContext(ReloadContext);

  const { data, loading } = useGetData("evento", reload);

  const generarEventos = (info) => {
    let cards = [];
    info.map((v, i) => {
      cards = [...cards, (
        <EventoCard
          info={v}
          key={i}
        />)]
    })
    return cards
  }

  return (
    <div className="carrusel-container">
      <div className="carruselEventoAdmin">
        <div className="carruselHeader">
          <h1>Eventos Actuales</h1>
          <h1>Crear Evento</h1>
        </div>
        <Carousel dotPosition="top" style={{ width: "900px" }}>
          <div className="listEventos">
            <Spin spinning={loading} indicator={antIcon}>
              <div className="list">
                {generarEventos(data)}
              </div>
            </Spin>
          </div>
          <div>
            <div className="listEventos">
              <CrearEventos />
            </div>
          </div>
        </Carousel>
      </div>
    </div>

  );
}

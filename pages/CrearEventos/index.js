import { useState } from "react";

import CardDate from "../../components/cardDate";
import { Input, Button } from "antd";
import { DatePicker } from "antd";
import { Typography } from "antd";

const inicio = {
  semana: "Lunes",
  dia: 24,
  mes: "Marzo",
  año: "2021",
  hora: "12:31 PM",
};
const cierre = {
  semana: "Jueves",
  dia: 27,
  mes: "Marzo",
  año: "2021",
  hora: "05:31 PM",
};

export default function CrearEventos() {
  const [fecha, setFecha] = useState({
    inicio: { ...inicio },
    cierre: { ...cierre },
  });

  const { Title } = Typography;
  const { TextArea } = Input;

  const convertDate = (date) => {
    const convertDate = String({ ...date }._d).split(" ");
    const dates = {
      semana: convertDate[0],
      mes: convertDate[1],
      dia: convertDate[2],
      año: convertDate[3],
      hora: convertDate[4],
    };
    return dates;
  };
  const onChangeInicio = (date) => {
    const dates = convertDate(date);

    setFecha({ ...fecha, inicio: { ...dates } });
  };
  const onChangeCierre = (date) => {
    const dates = convertDate(date);

    setFecha({ ...fecha, cierre: { ...dates } });
  };

  return (
    <div className="crearEV_Container">
      <div className="titulo">
        <Title level={2}>Crear Eventos</Title>
      </div>
      <div className="contend">
        <form className="form-eventos">
          <input className="input-title" placeholder="Titulo del Evento" />
          <hr className="event-hr" />
          <div className="cont-options">
            <div className="cont-options-img"></div>
            <div className="options-right">
              <div className="options-right-h3 ">
                <div className="right-date card1">
                  <Title level={4}>Inicio</Title>

                  <CardDate {...fecha.inicio} />
                </div>

                <div className="date-pick">
                  <div className="fecha">
                    <DatePicker
                      name="inicio"
                      onChange={onChangeInicio}
                      className="place"
                      placeholder="Fecha Incial"
                      showTime
                    />
                  </div>
                  <div>
                    <DatePicker
                      name="cierre"
                      onChange={onChangeCierre}
                      className="place"
                      placeholder="Fecha Cierre"
                      showTime
                    />
                  </div>
                </div>
                <div className="right-date card2">
                  <Title level={4}>Cierre</Title>

                  <CardDate {...fecha.cierre} />
                </div>
              </div>
              <div className="right-inputs">
                <Title level={3}>Información General</Title>
                <div className="contenedor-inputs">
                  <div className="inputs-info">
                    <div className="inputs-info-right">
                      <label htmlFor="lugar">{"Lugar: "}</label>
                      <input id="lugar" className="inputs-Eventos" />
                      <label htmlFor="tematica">{"Tematica: "}</label>
                      <input id="tematica" className="inputs-Eventos" />
                      <label htmlFor="direccion">{"Dirección: "}</label>
                      <input id="direccion" className="inputs-Eventos" />
                    </div>
                    <div className="inputs-info-left">
                      <label htmlFor="anfitrion">{"Anfitrión: "}</label>
                      <input id="anfitrion" className="inputs-Eventos" />
                      <label htmlFor="aforo">{"Aforo: "}</label>
                      <input
                        id="aforo"
                        className="inputs-Eventos"
                        type="number"
                      />
                      <label htmlFor="boletas">{"Boletas Permitidas: "}</label>
                      <input
                        id="boletas"
                        className="inputs-Eventos"
                        type="number"
                      />
                    </div>
                  </div>
                  <TextArea
                    className="input-textarea"
                    placeholder="Descripción"
                    rows={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <button className="button-crearEv" type="primary" size="small">
        Crear Evento
      </button>
    </div>
  );
}

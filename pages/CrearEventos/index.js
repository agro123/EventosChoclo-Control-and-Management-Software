import CardDate from "../../components/cardDate";
import { Input, Button } from "antd";
import { DatePicker } from "antd";

export default function CrearEventos() {
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;
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
  return (
    <div className="crearEV_Container">
      <div className="titulo">
        <h2>Crear Eventos</h2>
      </div>
      <div className="contend">
        <form className="form-eventos">
          <input className="input-title" placeholder="Titulo del Evento" />
          <hr className="event-hr" />
          <div className="cont-options">
            <div className="cont-options-img"></div>
            <div className="options-right">
              <div className="options-right-h3">
                <div className="right-date">
                  <h3>Inicio</h3>

                  <CardDate {...inicio} />
                </div>
                <div></div>
                <div className="right-date">
                  <h3>Cierre</h3>

                  <CardDate {...cierre} />
                </div>
              </div>
              <div className="right-inputs">
                <h3>Información General</h3>
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
                    rows={2}
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

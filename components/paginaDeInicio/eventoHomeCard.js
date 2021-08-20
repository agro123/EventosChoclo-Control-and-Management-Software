import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import { useDate } from '../../hooks/useDate';
const defEvento = {
    titulo: "BIENVENIDO A EVENTOSCHOLO :D",
    imagen: '/defaultImg.jpg',
    fecha_inicial: "29-02-2000",
    fecha_final: "29-02-2000",
    descrip: "EventosChoclo...",
    lugar: "EventosChoclo",
    id_evento: 10000,
}
function eventoHomeCard({ info }) {

    const { imagen, titulo, fecha_inicial, fecha_final, descrip, lugar, id_evento } = info;

    const [loading, setLoading] = useState(true);
    const onChange = () => { setLoading(false); }
    setTimeout(onChange, 500);

    const boletas = 200;

    const soloFecha = (fecha) => fecha.slice(0, 10);
    const { sameDates } = useDate([soloFecha(fecha_inicial), soloFecha(fecha_final)]);

    return (
        <div className="eventoHomeCard">
            <Skeleton loading={loading} active>
                <div className="display">
                    <img alt="example"
                        src={imagen ||
                            "https://valledelpacifico.co/wp-content/uploads/2019/12/cevp-home2.jpg"}
                        className="imagen"
                    />
                    <div className="eventoCardDescripcion">
                        <p>{descrip}</p>
                    </div>
                </div>
                <div className="titleCard">
                    {titulo}
                </div>
                <div className="eventoCardFecha">
                    {sameDates()}
                </div>
                <div className="boletasDisponibles">
                    Boletas disponibles
                    <div className="boletas">
                        {lugar}
                    </div>
                </div>
            </Skeleton>
        </div>
    )
}

eventoHomeCard.propTypes = {

}

export default eventoHomeCard


import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import { useDate } from '../../hooks/useDate';
const defEvento = {
    titulo: "BIENVENIDO A EVENTOSCHOLO :D",
    imagen: '/defaultImg.jpg',
    fecha_inicial: "2000-02-29",
    fecha_final: "2000-02-29",
    descrip: "EventosChoclo...",
    lugar: "EventosChoclo",
    id_evento: 10000,
    boletas: 1000,
}
function eventoHomeCard({ info = defEvento }) {
    const { imagen, titulo, fecha_inicial, fecha_final, descrip, lugar, id_evento } = info;

    const [loading, setLoading] = useState(true);
    const onChange = () => { setLoading(false); }
    setTimeout(onChange, 500);

    const boletas = 200;

    const soloFecha = (fecha) => fecha.slice(0, 10);
    const { sameDates } = useDate([soloFecha(fecha_inicial), soloFecha(fecha_final)]);

    return (
        <Link href={`/evento/${id_evento}`}>
            <div className="eventoHomeCard">
                <Skeleton loading={loading} active>
                    <div className="display">
                        <img alt="example"
                            src={imagen || '/defaultImg.jpg'}
                            className="imagen"
                        />
                        <div className="eventoCardDescripcion">
                            <p>{descrip}</p>
                        </div>
                    </div>
                    <div className="descripHC">
                        <div className="titleCard">
                            {titulo}
                        </div>
                        <div className="eventoCardFecha">
                            {sameDates()}
                        </div>
                        <div className="boletasDisponibles">
                            Boletas disponibles
                            <div className="boletas">
                                {boletas}
                            </div>
                        </div>
                    </div>
                </Skeleton>
            </div>
        </Link>
    )
}

eventoHomeCard.propTypes = {

}

export default eventoHomeCard


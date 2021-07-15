import React from 'react'
import PropTypes from 'prop-types';
import { Spin, Button } from "antd";
import { useDate } from '../../hooks/useDate';

function eventoHomeCard({ info }) {
    const boletas = 1000;

    let fecha_inicial = "2021-09-20";

    let fecha_final = "2021-11-21"

    const soloFecha = (fecha) => fecha.slice(0, 10);
    const { sameDates } = useDate([soloFecha(fecha_inicial), soloFecha(fecha_final)]);

    return (
        <div className="eventoHomeCard">
            <div className="display">
            </div>
            <div className="titleCard">
                Un super titulo
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
    )
}

eventoHomeCard.propTypes = {

}

export default eventoHomeCard


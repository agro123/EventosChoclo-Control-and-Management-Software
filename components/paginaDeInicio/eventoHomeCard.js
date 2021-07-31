import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import { useDate } from '../../hooks/useDate';

function eventoHomeCard({ info }) {
    const [loading, setLoading] = useState(true);
    const onChange = () => { setLoading(false); }
    setTimeout(onChange, 500);

    const boletas = 200;

    let fecha_inicial = "2021-09-20";

    let fecha_final = "2021-11-21"

    const soloFecha = (fecha) => fecha.slice(0, 10);
    const { sameDates } = useDate([soloFecha(fecha_inicial), soloFecha(fecha_final)]);

    return (
        <div className="eventoHomeCard">
            <Skeleton loading={loading} active>
                <div className="display">
                    <img alt="example"
                        src={
                            "https://valledelpacifico.co/wp-content/uploads/2019/12/cevp-home2.jpg"}
                        className="imagen"
                    />
                    <div className="eventoCardDescripcion">
                        <p>Hola</p>
                    </div>
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
            </Skeleton>
        </div>
    )
}

eventoHomeCard.propTypes = {

}

export default eventoHomeCard


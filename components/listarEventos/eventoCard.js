import React, { useState } from 'react';
import { Skeleton, Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import DeleteButton from './deleteButton';
/* import propTypes from 'prop-types'; */
import { useDate } from '../../hooks/useDate';

export default function EventoCard({ info }) {
    const { imagen, titulo, fecha_inicial, fecha_final, descrip, lugar, id_evento } = info; //problema con la imagen :"u

    const soloFecha = (fecha) => fecha.slice(0, 10);// esta funcion es necesaria debido a que la fecha que se recibe de la forma aa-mm-ddT000000....

    const { sameDates } = useDate([soloFecha(fecha_inicial), soloFecha(fecha_final)]);

    const [loading, setLoading] = useState(true);
    const onChange = () => { setLoading(false); }

    const onClick = e => {
        console.log("editar")
    }
    setTimeout(onChange, 500);

    return (
        <div className="eventoHomeCard">
            <Skeleton loading={loading} active>
                <div className="display">
                    <img alt="example"
                        src={imagen ||
                            "https://www.bbva.com/wp-content/uploads/2017/08/holi-party-1024x423.png"}
                        className="imagen"
                    />
                    <div className="eventoCardDescripcion">
                        <p>{descrip}</p>
                    </div>
                </div>
                <div className="titleCard">
                    {titulo || "Titulo del evento"}
                </div>
                <div className="eventoCardFecha">
                    {sameDates()}
                </div>
                <div className="buttons">
                    <DeleteButton id={id_evento} key="delete" />
                    <div>
                        <EditOutlined key="edit" onClick={onClick} />
                    </div>
                </div>
            </Skeleton>
        </div>
    )
}
/* EventoCard.propTypes = {
    info.propTypes.obje
} */
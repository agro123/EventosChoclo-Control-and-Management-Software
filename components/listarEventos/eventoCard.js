import React, { useState } from 'react';
import { Skeleton, Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import DeleteButton from './deleteButton';
import { useRouter } from "next/router";
/* import propTypes from 'prop-types'; */
import { useDate } from '../../hooks/useDate';
const defEvento = {
    titulo: "BIENVENIDO A EVENTOSCHOLO :D",
    imagen: '/defaultImg.jpg',
    fecha_inicial: "2000-02-29",
    fecha_final: "2000-02-29",
    descrip: "EventosChoclo...",
    lugar: "EventosChoclo",
    id_evento: 10000,
}
export default function EventoCard({ info=defEvento }) {
    const router = useRouter();
    const { imagen, titulo, fecha_inicial, fecha_final, descripcion, lugar, id_evento,url_imagen } = info; //problema con la imagen :"u
    
    const soloFecha = (fecha) => fecha.slice(0, 10);// esta funcion es necesaria debido a que la fecha que se recibe de la forma aa-mm-ddT000000....

    const { sameDates } = useDate([soloFecha(fecha_inicial), soloFecha(fecha_final)]);

    const [loading, setLoading] = useState(true);
    const onChange = () => { setLoading(false); }

    const onClick = () => {
        setLoading(true);
        router.push(`/ModificarEvento/${info.id_evento}`);
        setLoading(false);
    }
    setTimeout(onChange, 500);

    return (
        <div className="eventoHomeCard">
            <Skeleton loading={loading} active>
                <div className="display">
                    <img alt="example"
                        src={url_imagen || "https://i.pinimg.com/originals/50/f6/0a/50f60a6eb9966f0cbbfa8ef052b0d3ed.jpg"}
                        className="imagen"
                    />
                    <div className="eventoCardDescripcion">
                        <p>{descripcion}</p>
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
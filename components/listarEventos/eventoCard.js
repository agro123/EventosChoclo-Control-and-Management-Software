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
        <div className="eventoCard">
            <Skeleton loading={loading} active>
            <Card
                style={{
                    width: 200,
                    height: 320,
                    borderRadius: '20px',
                    padding: '4px',
                    border: '1px solid rgba(59, 66, 72, 0.3)'
                }}
                actions={[
                    <DeleteButton id={id_evento} key="delete" />,
                    <EditOutlined key="edit" onClick={onClick} />,
                ]}
                hoverable
                cover={<img alt="example"
                    src={imagen ||
                        "https://www.bbva.com/wp-content/uploads/2017/08/holi-party-1024x423.png"}
                    height="120"
                />
                }
                title={titulo || "Titulo del evento"}
            >
                <div className="eventoCardLeyenda">
                    <div className="eventoCardDescripcion">
                        <p>{descrip}</p>
                    </div>
                    <div className="eventoCardFecha">
                        {sameDates()}
                    </div>
                    <p style={{ textAlign: "center" }}>{lugar || "SomeWhere"}</p>
                </div>
            </Card>
            </Skeleton>
        </div >
    )
}
/* EventoCard.propTypes = {
    info.propTypes.obje
} */
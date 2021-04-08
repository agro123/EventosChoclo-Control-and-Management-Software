import React, { useState } from 'react';
import { Skeleton, Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';
import { useDate } from '../../hooks/useDate';

export default function EventoCard({ imagen, titulo,
    fecha_inicial, fecha_final, descripcion, lugar }) {
    const [loading, setLoading] = useState(true);

    const { day, month, sameDates } = useDate([fecha_inicial, fecha_final]);

    const onChange = () => {
        setLoading(false);
    }

    const mismoDia = () => {
        let u = ""
        if (!sameDates()) {
            u =
                (<div className="fecha">
                    <div className="dia">{day(1) || "31"}</div>
                    <div className="mes">{month(1) || "Septiembre"}</div>
                </div>)
        }
        return u;
    }

    setTimeout(onChange, 1500);

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
                        <DeleteOutlined key="delete" />,
                        <EditOutlined key="edit" />,
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
                            <p>{descripcion}</p>
                        </div>
                        <div className="eventoCardFecha">
                            <div className="fecha">
                                <div className="dia">{day(0) || "31"}</div>
                                <div className="mes">{month(0) || "Septiembre"}</div>
                            </div>
                            {mismoDia()}
                        </div>
                        <p style={{ textAlign: "center" }}>{lugar}</p>
                    </div>
                </Card>
            </Skeleton>
        </div >
    )
}
EventoCard.propTypes = {
    titulo: propTypes.string.isRequired,
    fecha_inicial: propTypes.string.isRequired,
    fecha_final: propTypes.string.isRequired,
    descripcion: propTypes.string,
    lugar: propTypes.string
}
import React, { useState } from 'react';
//import { Card } from 'antd';
import { Skeleton, Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];


export default function EventoCard({ imagen, titulo, fecha, descripcion }) {
    const [loading, setLoading] = useState(true);

    const onChange = () => {
        setLoading(false);
    }

    const f = fecha.split('/')

    setTimeout(onChange, 1500);

    return (
        <div className="eventoCard">
            <Skeleton loading={loading} active>
                <Card
                    style={{
                        width: 200,
                        height: 350,
                        borderRadius: '20px',
                        padding: '10px',
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
                            <div>{f[0] || "20"}</div>
                            <div>{meses[f[1]] || "Septiembre"}</div>
                        </div>
                    </div>
                </Card>
            </Skeleton>
        </div >
    )
}
/* EventoCard.propTypes = {
    titulo: propTypes.string.isRequired,
    fecha : propTypes.string.isRequired,
    descripcion: propTypes.string
 } */
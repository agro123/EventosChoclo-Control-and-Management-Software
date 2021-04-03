import React, { useState } from 'react';
//import { Card } from 'antd';
import { Skeleton, Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';

const { Meta } = Card;

export default function EventoCard({ imagen, titulo, fecha, descripcion }) {
    const [loading, setLoading] = useState(true);

    const onChange = () => {
        setLoading(false);
    }

    setTimeout(onChange, 2000);

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
                            "https://recasens.com/wp-content/uploads/2017/02/r_095_pvc_1.jpg"} />}
                    title={titulo || "Titulo del evento"}
                >
                    <div className="eventoCardLeyenda">
                        <div className="eventoCardFecha">
                            <div>{fecha || "20"}</div>
                            <div>{fecha || "Septiembre"}</div>
                        </div>
                        <div className="eventoCardDescripcion">
                            <p>Descripción: 	<br />{descripcion}</p>
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
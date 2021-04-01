import React, { useState } from 'react';
//import { Card } from 'antd';
import { Skeleton, Switch, Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function EventoCard() {
    const [loading, setLoading] = useState(false);
    const onChange = checked => {
        setLoading(!checked)
    }

    return (
        <div>
            <Switch checked={!loading} onChange={onChange} />
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
                        src="https://recasens.com/wp-content/uploads/2017/02/r_095_pvc_1.jpg" />}
                    title="TITULO DEL EVENTO"
                >
                    <div className="eventoCardLeyenda">
                        <div className="eventoCardFecha">
                            <div>20</div>
                            <div>Septiembre</div>
                        </div>
                        <div className="eventoCardDescripcion">
                            <p>Descripción: 	<br /></p>
                        </div>
                    </div>
                </Card>
            </Skeleton>
        </div >
    )
}

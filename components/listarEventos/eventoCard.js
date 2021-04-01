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
                    style={{ width: 250, height: 430, borderRadius: '20px' }}
                    actions={[
                        <DeleteOutlined key="delete" />,
                        <EditOutlined key="edit" />,
                    ]}
                    hoverable
                    cover={<img alt="example" src="https://recasens.com/wp-content/uploads/2017/02/r_095_pvc_1.jpg" />}
                    title="title"
                >

                    <div className="eventoCardLeyenda">
                        <div className="eventoCardFecha">
                            <div>20</div>
                            <div>Septiembre</div>
                        </div>
                        <div className="eventoCardDescripcion">
                            <p>Descripcion:<br/></p>
                        </div>
                    </div>
                </Card>
            </Skeleton>
        </div >
    )
}

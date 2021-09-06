import React, { useState, useContext } from 'react';
import { Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';
import axios from 'axios';
import { ReloadContext } from '../../context/reloadContext';

const config = { key: 'deleteEvent', style: { marginTop: '15vh' } }

export default function DeleteButton({ id }) {
    const { onChange } = useContext(ReloadContext);

    const [visible, setVisible] = useState(false);
    const showPopconfirm = () => {
        setVisible(true);
    };

    const handleOk = async () => {

        message.loading({ content: 'Eliminando evento...', ...config });
        //peticion a servidor para eleminiar un elemento
        try {
            const { status, data } = await axios.delete(`/api/evento/${id}`);
            if (status == 200) {
                onChange();
                console.log('Peticion delete exitosa:', data);
                setVisible(false);
                message.success({ content: 'Evento eliminado', duration: 2, ...config });
            }
        } catch (e) {
            console.log(e);
            setVisible(false);
            message.error({ content: 'El Evento no pudo ser eliminado', duration: 2, ...config });
        }
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
            <Popconfirm
                title="Esta acción es irreversible"
                visible={visible}
                onConfirm={handleOk}
                onCancel={handleCancel}
            >
                <div className='buttons' >
                    <DeleteOutlined className="deleteButton" onClick={showPopconfirm}/>
                </div>
            </Popconfirm>
        </>
    )
}
DeleteButton.propTypes = {
    id: propTypes.number.isRequired,
}
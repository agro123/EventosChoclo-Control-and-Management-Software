import React, { useState, useContext } from 'react';
import { Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';
import { CardContext } from '../../context/cardContext';
import { deleteEvento } from '../database/eventosCrud'

export default function DeleteButton({ id }) {
    const [visible, setVisible] = useState(false);

    const { generarEventos } = useContext(CardContext);

    const showPopconfirm = () => {//
        setVisible(true);
    };

    const handleOk = async () => {
        const config = { key: 'deleteEvent', style: { marginTop: '15vh' } }
        message.loading({ content: 'Eliminando evento...', ...config });
        //peticion a servidor para eleminiar un elemento
        try {
            const resp = await deleteEvento(id);
            if (resp) {
                console.log('El evento fue eliminado');
                setVisible(false);
                generarEventos();
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
                <DeleteOutlined className="deleteButton" onClick={showPopconfirm} />
            </Popconfirm>
        </>
    )
}
DeleteButton.propTypes = {
    id: propTypes.number.isRequired,
}
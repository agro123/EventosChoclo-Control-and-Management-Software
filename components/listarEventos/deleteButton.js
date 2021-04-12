import React, { useState, useContext } from 'react';
import { Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';
import { cardContext } from '../../context/cardContext';
import data from '../data.json'; //simulacion de bd

export default function DeleteButton({ id }) {
    const [visible, setVisible] = useState(false);

    const { generarEventos } = useContext(cardContext);

    const showPopconfirm = () => {//
        setVisible(true);
    };

    const borrar = () => {
        //peticion a servidor para eleminiar un elemento
        data.eventos.map((v, i) => {
            if (v.id === id) { data.eventos.splice(i, 1) }
        })
    }

    const handleOk = () => {
        const config = { key: 'deleteEvent', style: {marginTop: '15vh'}}
        message.loading({ content: 'Eliminando evento...', ...config });
        setTimeout(() => {
            setVisible(false);
            borrar();
            generarEventos(); //temporalmente mientras se termina el servidor
            message.success({ content: 'Evento eliminado', duration: 2, ...config });
        }, 2000);
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
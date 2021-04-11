import React,{useState} from 'react';
import { Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';
import data  from '../data.json'

export default function DeleteButton ({ id }) {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showPopconfirm = () => {
        setVisible(true);
    };

    const borrar = () => {
        //peticion a servidor para eleminiar un elemento
        data.eventos.map((v,i)=> {
            if(v.id===id)
            { data.eventos.splice(i,1)}
        })
        setConfirmLoading(false);
    }

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            borrar();
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <div>
            <Popconfirm
                title="Title"
                visible={visible}
                onConfirm={handleOk}
                okButtonProps={{ loading: confirmLoading }}
                onCancel={handleCancel}
            >
                <DeleteOutlined  onClick={showPopconfirm} />
            </Popconfirm>

        </div>
    )
}
DeleteButton.propTypes = {
    id: propTypes.number.isRequired,
}
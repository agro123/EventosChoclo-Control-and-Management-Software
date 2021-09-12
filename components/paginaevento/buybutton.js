import React, { useState, useContext } from 'react'
import { Modal, Button } from 'antd';
import UserContext from "../../context/user/usercontext";
import PaySteps from './paysteps';

function BuyButton() {
    const [visible, setVisible] = useState(false)

    const { user } = useContext(UserContext);

    const onClick = e => {
        e.preventDefault();
        setVisible(!visible);
    }
    return (
        <>
            <Modal
                visible={visible}
                title="Adquirir Boletas"
                footer={[
                    <Button key="back" onClick={onClick}>
                        Volver
                    </Button>,
                ]}
                destroyOnClose={true}
                style={{ heigth: "500px" }}
            >
                <PaySteps />
            </Modal>
            <Button className="button-crearEv"
                block size="small"
                onClick={onClick}
            >
                Adquirir Boletas
            </Button>


        </>
    )
}

export default BuyButton


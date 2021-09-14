import React, { useState, useContext } from 'react'
import { Modal, Button, Popover } from 'antd';
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
                onCancel={onClick}
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
                disabled={!user.isAuth}
            >
                <Popover visible={!user.isAuth} placement="right" content="¡Inicie sesión para adquirir sus boletas!">
                    Adquirir Boletas
                </Popover>
            </Button>



        </>
    )
}

export default BuyButton


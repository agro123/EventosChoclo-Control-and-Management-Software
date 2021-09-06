import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import PaySteps from './PaySteps';

function BuyButton(props) {
    const [visible, setVisible] = useState(false)

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
                onClick={onClick}>
                Adquirir Boletas
            </Button>
        </>
    )
}

BuyButton.propTypes = {

}

export default BuyButton


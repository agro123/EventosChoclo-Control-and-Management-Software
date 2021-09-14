import React, { useState, useContext } from 'react'
import {
    Button, Steps, message,
} from 'antd';
import { EventosContext } from '../../context/eventoscontext';
import { FormStep1, FormStep2, FormStep3, FormStep4 } from './steps';
import { isValidCvC, isValidCCNumber, isValidEndDate, isFormComplete, dateToTimeStamp } from './auxfunctions';
import axios from "axios";
import UserContext from "../../context/user/usercontext";

const { Step } = Steps;
//-----------Arreglo de steps
const steps = [
    {
        title: 'Paso 1',
        content:
            <FormStep1 />,
    },
    {
        title: 'Paso 2',
        content:
            <FormStep2 />,
    },
    {
        title: 'Paso 3',
        content:
            <FormStep3 />,
    },
    {
        title: 'Paso 4',
        content:
            <FormStep4 />,
    },
];

//--------------------------Componente Principal
export default function PaySteps() {
    const { user } = useContext(UserContext);
    const [current, setCurrent] = useState(0);
    const { paymentInfo, evento } = useContext(EventosContext);
    const { endDate, cardNumber, cvc } = paymentInfo;

    const now = new Date();
    const hoy = dateToTimeStamp(now);

    const buyBoleta = async () => {
        try {
            message.loading('Procesando compra...')
            const body = {
                id_usuario: user.user.id_usuario,
                id_evento: evento.id_evento,
                fecha_compra: hoy,
                num_boletas: paymentInfo.tickets,
                total_compra: (paymentInfo.tickets * evento.precio_boleta),
                nombre_cli: paymentInfo.name,
                apellido_cli: paymentInfo.lastName,
            }
            const res = await axios.post("/api/compra", body);
            if (res.status === 201) {
                next();
                message.success('¡Boletas Adquiridas!');
            }
        } catch (e) {
            message.error('Ha sucedido un problema intente mas tarde');
        }

    }

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const onHecho = () => {
        if (isFormComplete(paymentInfo) && isValidCvC(cvc)
            && isValidEndDate(endDate) && isValidCCNumber(cardNumber)) {
            buyBoleta();
        }
    }


    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 2 && (
                    <Button type="primary" onClick={() => next()}>
                        Siguiente
                    </Button>
                )}
                {current === steps.length - 2 && (
                    <Button type="primary" onClick={() => onHecho()}>
                        Hecho
                    </Button>
                )}
                {(current > 0 && current < steps.length - 1) && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Anterior
                    </Button>
                )}
            </div>
        </>
    );
}

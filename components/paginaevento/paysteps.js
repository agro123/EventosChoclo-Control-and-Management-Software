import React, { useState, useContext } from 'react'
import {
    Button, Steps, message,
} from 'antd';
import { EventosContext } from '../../context/eventoscontext';
import { FormStep1, FormStep2, FormStep3, FormStep4 } from './steps';
import { isValidCvC, isValidCCNumber, isValidEndDate, isFormComplete } from './auxfunctions';

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
    const [current, setCurrent] = useState(0);
    const { paymentInfo } = useContext(EventosContext);
    const { endDate, cardNumber, cvc } = paymentInfo;

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const onHecho = () => {
        if (isFormComplete(paymentInfo) && isValidCvC(cvc)
            && isValidEndDate(endDate) && isValidCCNumber(cardNumber)) {
            message.success('Boletas Adquiridas!');
            next();
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

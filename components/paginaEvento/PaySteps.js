import React from 'react'
import { Button, Steps, message, Form, Input, Cascader, Divider } from 'antd';
import {  CheckCircleTwoTone } from '@ant-design/icons';
const { Step } = Steps;

//--------------------Componentes Steps
const FormStep1 = () => {
    return (
        <>
            <h2>Informacion de contacto:</h2>
            <Form labelCol={{ span: 8, }}
                wrapperCol={{ span: 14, }}
                layout="horizontal"
            >
                <Form.Item label="Nombre y Apellidos" required>
                    <Input allowClear />
                </Form.Item>
                <Form.Item label="Número de Télefono" required>
                    <Cascader
                        options={[{ value: '+57', label: '+57' }]}
                        disabled
                        defaultValue={['+57']}
                    /> <Input allowClear />
                </Form.Item>
                <Form.Item label="E-mail" required>
                    <Input allowClear />
                </Form.Item>
            </Form>
        </>
    )
}
const FormStep2 = () => {
    return (
        <>
            <h2>Tarjeta Debito/Credito:</h2>
            <Form labelCol={{ span: 8, }}
                wrapperCol={{ span: 14, }}
                layout="horizontal"
            >
                <Form.Item label="Nombre en la tarjeta" required>
                    <Input allowClear />
                </Form.Item>
                <Form.Item label="Número de la tarjeta" required>
                    <Input allowClear />
                </Form.Item>
                <Form.Item label="CVC" required>
                    <Input allowClear />
                </Form.Item>
                <Form.Item label="Fecha de vencimiento" required>
                    <Input allowClear />
                </Form.Item>
            </Form>
        </>
    )
}
const FormStep3 = () => {
    return (
        <>
            <h2>CheckOut:</h2>
            <Divider>Información del evento</Divider>
            <p>Nombre del evento:</p>
            <p>Fecha:</p>
            <p>Número de entradas:</p>
            <p>Costo por entrada:</p>
            <p>Costo Total:</p>
            <Divider>Tarjeta de credito/debito</Divider>
            <p>Nombre:</p>
            <p>Número:</p>
            <Divider>Información de contacto</Divider>
            <p>Nombre:</p>
            <p>Télefono:</p>
            <p>E-mail:</p>
        </>
    )
}

const FormStep4 = () => {
    return (
        <>
            <h2>Proceso Exitoso <CheckCircleTwoTone twoToneColor="#52c41a" /></h2>
            <p>Te enviamos un correo con el código QR el cual debes presentar al momento de entrar al evento</p>
        </>
    )
}

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
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const onHecho = () => {
        message.success('Boletas Adquiridas!')
        next()
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

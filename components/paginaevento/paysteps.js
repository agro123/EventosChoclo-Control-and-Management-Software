import React, { useState, useContext, useEffect } from 'react'
import {
    Button, Steps, message, Form,
    Input, Cascader, Divider, Select,
    InputNumber
} from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { EventosContext } from '../../context/eventoscontext';
const { Step } = Steps;

//--------------------Componentes Steps
const FormStep1 = () => {
    const { paymentInfo, editPaymentInfo } = useContext(EventosContext);

    /* const selectBefore = (
        <Select disabled defaultValue="+57" className="select-before">
            <Select.Option value="+57">+57</Select.Option>
        </Select>
    ); */
    const onChange = e => {
        editPaymentInfo({ [e.target.name]: e.target.value });
    };
    const onSelectTickets = e => { editPaymentInfo({ tickets: e }); };
    return (
        <>
            <h2>Informacion de contacto:</h2>
            <Form labelCol={{ span: 8, }}
                wrapperCol={{ span: 14, }}
                layout="horizontal"
            >
                <Form.Item label="Nombre y Apellidos" required>
                    <Input allowClear value={paymentInfo.name} name="name" onChange={onChange} />
                </Form.Item>
                {/* <Form.Item label="Número de celular" required>
                    <Input
                        name="phoneNumber"
                        value={paymentInfo.phoneNumber} onChange={onChange}
                        addonBefore={selectBefore}
                        allowClear
                        type='number'
                    />
                </Form.Item>
                <Form.Item label="E-mail" required>
                    <Input
                        name="email"
                        value={paymentInfo.email} onChange={onChange}
                        allowClear
                        type='email'
                        pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                    />
                </Form.Item> */}
                <Form.Item label="Número de boletas">
                    <InputNumber type='number' style={{ width: '70px' }}
                        onChange={onSelectTickets}
                        min={1} max={100000} defaultValue={paymentInfo.tickets} />
                </Form.Item>
            </Form>
        </>
    )
}
const FormStep2 = () => {
    const { paymentInfo, editPaymentInfo } = useContext(EventosContext);
    const onChange = e => {
        editPaymentInfo({ [e.target.name]: e.target.value });
    };
    return (
        <>
            <h2>Tarjeta Debito/Credito:</h2>
            <Form labelCol={{ span: 8, }}
                wrapperCol={{ span: 14, }}
                layout="horizontal"
            >
                <Form.Item label="Nombre en la tarjeta" required>
                    <Input
                        allowClear
                        name="nameCard" onChange={onChange}
                        value={paymentInfo.nameCard} />
                </Form.Item>
                <Form.Item label="Número de la tarjeta" required>
                    <Input allowClear
                        name="cardNumber" onChange={onChange}
                        value={paymentInfo.cardNumber} /> {/*Solo número y maximo 16num*/}
                </Form.Item>
                <Form.Item label="CVC" required>
                    <Input allowClear
                        name="cvc" onChange={onChange}
                        value={paymentInfo.cvc} />{/*Solo número y maximo 3num*/}
                </Form.Item>
                <Form.Item label="Fecha de vencimiento" required>
                    <Input allowClear
                        name="endDate" onChange={onChange}
                        value={paymentInfo.endDate} />{/*date*/}
                </Form.Item>
            </Form>
        </>
    )
}
const FormStep3 = () => {
    const { paymentInfo } = useContext(EventosContext);

    return (
        <>
            <h2>CheckOut:</h2>
            <Divider>Información del evento</Divider>
            <p>Nombre del evento:</p>
            <p>Fecha:</p>
            <p>Entradas adquiridas: {paymentInfo.tickets}</p>
            <p>Costo por entrada:</p>
            <p>Costo Total:</p>
            <Divider>Tarjeta de credito/debito</Divider>
            <p>Nombre: {paymentInfo.nameCard}</p>
            <p>Número: {paymentInfo.cardNumber}</p>
            <Divider>Información de contacto</Divider>
            <p>Nombre: {paymentInfo.name}</p>
            <p>Celular: {paymentInfo.phoneNumber}</p>
            <p>E-mail: {paymentInfo.email}</p>
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
    const [current, setCurrent] = useState(0);

    const { paymentInfo } = useContext(EventosContext);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const onHecho = () => {
        let isOk = true;
        for (const property in paymentInfo) {
            if(paymentInfo[property] == ''){
                isOk = false;
                break;
            };
        }
        if (isOk) {
            message.success('Boletas Adquiridas!');
            next();
        }
        else message.error('Por favor complete todos los campos')
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

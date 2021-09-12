import React, { useContext } from 'react'
import {
    Form,
    Input, Divider, Result,
    InputNumber
} from 'antd';
import Image from 'next/image';
import { EventosContext } from '../../context/eventoscontext';
import { formatter } from './auxfunctions';
import { useDate } from '../../hooks/usedate';

//--------------------Componentes Steps
export const FormStep1 = () => {
    const { paymentInfo, editPaymentInfo, evento } = useContext(EventosContext);
    const { num_boletas } = evento;
    const onChange = e => {
        editPaymentInfo({ [e.target.name]: e.target.value });
    };
    const onSelectTickets = e => { editPaymentInfo({ tickets: e }); };
    console.log(num_boletas)
    return (
        <>
            <h2>Informacion de contacto:</h2>
            <Form labelCol={{ span: 8, }}
                wrapperCol={{ span: 14, }}
                layout="horizontal"
            >
                <Form.Item label="Nombre" required>
                    <Input allowClear value={paymentInfo.name} name="name" onChange={onChange} />
                </Form.Item>
                <Form.Item label="Apellidos" required>
                    <Input allowClear value={paymentInfo.lastName} name="lastName" onChange={onChange} />
                </Form.Item>
                <Form.Item label="Número de boletas">
                    <InputNumber type='number' style={{ width: '70px' }}
                        onChange={onSelectTickets}
                        min={1} max={num_boletas} defaultValue={paymentInfo.tickets} />
                </Form.Item>
            </Form>
        </>
    )
}
export const FormStep2 = () => {
    const { paymentInfo, editPaymentInfo } = useContext(EventosContext);
    const { endDate, cvc, nameCard, cardNumber } = paymentInfo;

    const onChange = e => {
        editPaymentInfo({ [e.target.name]: e.target.value });
    };

    return (
        <>
            <h2>Tarjeta de Crédito:</h2>
            <Form labelCol={{ span: 8, }}
                wrapperCol={{ span: 14, }}
                layout="horizontal"
            >
                <Form.Item label="Nombre en la tarjeta" required>
                    <Input
                        allowClear
                        name="nameCard" onChange={onChange}
                        value={nameCard} />
                </Form.Item>
                <Form.Item label="Número de la tarjeta" required>
                    <Input allowClear
                        type='number'
                        name="cardNumber" onChange={onChange}
                        value={cardNumber} />
                </Form.Item>
                <Form.Item label="CVC" required>
                    <Input allowClear
                        type='number'
                        name="cvc" onChange={onChange}
                        value={cvc} />
                </Form.Item>
                <Form.Item label="Fecha de vencimiento" required>
                    <Input allowClear
                        name="endDate" onChange={onChange}
                        value={endDate} />
                </Form.Item>
            </Form>
            <Image alt="MasterCardIcon" src='/mastercard.png' key='1m' width='90' height='60' />
            <Image alt="VisaIcon" src='/Visa.png' key='2m' width='90' height='60' />
        </>
    )
}

export const FormStep3 = () => {
    const { paymentInfo, evento } = useContext(EventosContext);
    const { fecha_final, fecha_inicial,
        titulo, precio_boleta } = evento;
    const { tickets, name, nameCard, cardNumber, lastName } = paymentInfo;

    const soloFecha = fecha => fecha.slice(0, 10);
    const soloHora = hora => hora.slice(11, 16);
    const { isSameDates, day, month, year, dayName } = useDate([soloFecha(fecha_inicial), soloFecha(fecha_final)]);
    const initialDate = <p>Fecha: {day(0) + ' de ' + month(0) + ' del ' + year(0) + ' a las ' + soloHora(fecha_inicial)}</p>
    const finalDate = <p>Fecha final: {day(1) + ' de ' + month(1) + ' del ' + year(1) + ' a las ' + soloHora(fecha_inicial)}</p>;
    return (
        <>
            <h2>CheckOut:</h2>
            <Divider>Información del evento</Divider>
            <p>Nombre del evento: {titulo}</p>
            {initialDate}
            {!isSameDates ?
                ''
                : finalDate}
            <p>Entradas adquiridas: {tickets}</p>
            <p>Costo por entrada: {formatter.format(precio_boleta)}</p>
            <p>Costo Total: {formatter.format(tickets * precio_boleta)}</p>
            <Divider>Tarjeta de Crédito</Divider>
            <p>Nombre: {nameCard}</p>
            <p>Número: {cardNumber}</p>
            <Divider>Información de contacto</Divider>
            <p>Nombre: {name + ' ' + lastName}</p>
            <p>Celular: { }</p>
            <p>E-mail: { }</p>
        </>
    )
}

export const FormStep4 = () => {
    return (
        <>
            <Result
                status="success"
                title="Compra Exitosa!"
                subTitle="Te enviamos un correo con el código QR el cual debes presentar al momento de entrar al evento"
            />,
        </>
    )
}

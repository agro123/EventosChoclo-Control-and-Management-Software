import EventoHomeCard from './eventoHomeCard';
import { EventosContext } from '../../context/EventosContext';
import React, { useContext } from 'react';
import {  Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;

export default function listEventos({eventos, loading}) {


    const generarEventos = (info) => {
        let cards = [];
        info.map((v, i) => {
            cards = [...cards, (
                <EventoHomeCard
                    info={v}
                    key={i}
                />)]
        })
        return cards
    }
    return (
        <Spin spinning={loading} indicator={antIcon}>
            <div className='listaDeEventos'>
                {generarEventos(eventos)}
            </div>
        </Spin>
    )
}

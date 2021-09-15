import EventoHomeCard from './eventohomecard';
import React from 'react';
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;

export default function listEventos({eventos}) {
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
            <div className='listaDeEventos'>
                {generarEventos(eventos)}
            </div>
    )
}

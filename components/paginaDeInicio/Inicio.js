import React, { useContext } from 'react'
import Slider from './slider';
import ListEventos from './listEventos';
import EventoHomeCard from './eventoHomeCard';
import { Divider } from 'antd';
import useGetData from '../../hooks/useGetData';
import { EventosContext } from '../../context/EventosContext';

export default function Inicio() {
    const { data, loading } = useGetData("evento", true);

    const { eventos, addEventos } = useContext(EventosContext);

    addEventos(data);

    return (
        <>
            <Slider />
            <div className="eventos">
                <h1 className="title-home">¡En EventosChoclo tenemos los mejores eventos!</h1>
                <div>
                    <h2 className="title-home">Destacado</h2>
                    <div className="destacado">
                        <EventoHomeCard />
                        <EventoHomeCard />
                        <EventoHomeCard />
                        <EventoHomeCard />
                    </div>
                    <Divider orientation="left" plain />
                </div>
                <div className="masEventos">
                    <h2 className="title-home">Mas Eventos</h2>
                    <ListEventos eventos={data} loading={loading} />
                </div>
            </div>
        </>
    )
}

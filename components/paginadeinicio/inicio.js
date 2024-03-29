import React, { useContext } from 'react'
import Slider from './slider';
import ListEventos from './listeventos';
import EventoHomeCard from './eventohomecard';
import { Divider,Spin } from 'antd';
import useGetData from '../../hooks/usegetdata';
import { EventosContext } from '../../context/eventoscontext';
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;

export default function Inicio() {
    const { data, loading } = useGetData("eventoCompleto", true);

    const { eventos, addEventos } = useContext(EventosContext);

    addEventos(data);

    return (
        <>
            <Spin spinning={loading} indicator={antIcon}>
                <Slider />
                <div className="page-container">
                    <h1 className="title-home">¡En EventosChoclo tenemos los mejores eventos!</h1>
                    <div className="masEventos">
                        <h2 className="title-home">Destacado</h2>
                        <div className="listaDeEventos">
                            <EventoHomeCard info={eventos[0]} key='EH1' />
                            <EventoHomeCard info={eventos[1]} key='EH2' />
                            <EventoHomeCard info={eventos[2]} key='EH3' />
                            <EventoHomeCard info={eventos[3]} key='EH4' />
                        </div>
                        <Divider orientation="left" plain />
                    </div>
                    <div className="masEventos">
                        <h2 className="title-home">Mas Eventos</h2>
                        <ListEventos eventos={data} />
                    </div>
                </div>
            </Spin>

        </>
    )
}

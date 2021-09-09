import React, { useContext } from 'react'
import { Carousel, Spin } from "antd";
import SliderEventos from './slidereventos';
import { EventosContext } from '../../context/eventoscontext';

export default function Slider() {
    const { eventos } = useContext(EventosContext);
    return (
        <>
            <Carousel autoplay>
                <SliderEventos info= {eventos[0]} key="S1" />
                <SliderEventos info= {eventos[1]} key="S2"/>
                <SliderEventos info= {eventos[3]}key="S3"/>
                <SliderEventos info= {eventos[4]} key="S4"/>
            </Carousel>,
        </>
    )
}

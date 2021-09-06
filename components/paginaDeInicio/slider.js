import React, { useContext } from 'react'
import { Carousel, Spin } from "antd";
import SliderEventos from './SliderEventos';
import { EventosContext } from '../../context/EventosContext';

export default function Slider() {
    const { eventos } = useContext(EventosContext);
    console.log("Generando eventos en Slider",eventos)
    return (
        <>
            <Carousel autoplay>
                <SliderEventos key="S1" />
                <SliderEventos key="S2"/>
                <SliderEventos key="S3"/>
                <SliderEventos key="S4"/>
            </Carousel>,
        </>
    )
}

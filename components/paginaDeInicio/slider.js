import React, { useContext } from 'react'
import { Carousel, Spin } from "antd";
import SliderEventos from './sliderEventos';
import { EventosContext } from '../../context/EventosContext';

export default function Slider() {
    const { data } = useContext(EventosContext);
    console.log(data)
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

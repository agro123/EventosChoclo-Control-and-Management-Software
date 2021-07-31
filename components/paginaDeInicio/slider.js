import React from 'react'
import { Carousel, Spin } from "antd";
import SliderEventos from './sliderEventos';

export default function Slider({ info }) {
    return (
        <>
            <Carousel autoplay>
                <SliderEventos/>
                <SliderEventos/>
                <SliderEventos/>
                <SliderEventos/>
            </Carousel>,
        </>
    )
}

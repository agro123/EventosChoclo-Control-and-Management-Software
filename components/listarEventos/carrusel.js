import React, { useContext } from 'react';
import { Carousel } from "antd";
import { cardContext } from '../../context/cardContext';

export default function Carrusel() {
    const contentStyle = {
        height: "600px",
        background: "inherit",
    };
    const { eventos } = useContext(cardContext);

    return (
        <div className="carruselEventoAdmin">
            <div className="carruselHeader">
                <h1>Eventos Actuales</h1><h1>Crear Evento</h1>
            </div>
            <Carousel dotPosition="top" style={{ width: '900px' }}>
                <div className="listEventos">
                    <div className="list">
                        {eventos}
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>2</div>
                </div>
            </Carousel>
        </div>
    )
}

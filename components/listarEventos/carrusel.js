import React, { useState, useEffect } from 'react';
import { Carousel } from "antd";
import EventoCard from './eventoCard';

export default function Carrusel() {
    const contentStyle = {
        height: "600px",
        background: "inherit",
    };
    const [eventos, setEventos] = useState([]);
    useEffect(() => {
    }, [])

    const generarEventos = () => {
        //Pasar la informacion de la bd a el componente EventoCard;
        const cards = [];
        for (let i = 0; i < 10; i++) {
            cards.push(<EventoCard />)
        }
        return cards;
    }

    return (
        <div className="carruselEventoAdmin">
            <div className="carruselHeader">
                <h1>Eventos Actuales</h1><h1>Crear Evento</h1>
            </div>
            <Carousel dotPosition="top" style={{ width: '900px' }}>
                <div className="listEventos">
                    <div className="list">
                        {generarEventos()}
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>2</div>
                </div>
            </Carousel>
        </div>
    )
}

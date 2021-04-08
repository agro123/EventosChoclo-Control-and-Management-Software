import React, { useState, useEffect } from 'react';
import { Carousel } from "antd";
import EventoCard from './eventoCard';
import data from '../data.json'

export default function Carrusel() {
    const contentStyle = {
        height: "600px",
        background: "inherit",
    };
    const [eventos, setEventos] = useState([]);
    useEffect(() => {
        generarEventos()
    }, [])

    const generarEventos = () => {
        //Pasar la informacion de la bd a el componente EventoCard;
        const cards = [];
        data.eventos.map((v,i) => {
            cards.push(<EventoCard 
                imagen={v.imagen} 
                titulo={v.titulo} 
                fecha_inicial={v.fecha_inicial}
                fecha_final={v.fecha_final}
                descripcion={v.descripcion}
                lugar={v.lugar}
                key={i}/>)
        })
        setEventos(cards);
    }

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

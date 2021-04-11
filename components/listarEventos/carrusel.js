import React,{useContext,useEffect} from 'react';
import { Carousel } from "antd";
import { cardContext } from '../../context/cardContext';
import EventoCard from './eventoCard';
import data from '../data.json';// Se debe eliminar

export default function Carrusel() {
    const contentStyle = {
        height: "600px",
        background: "inherit",
    };
    const {eventos,setEventos} = useContext(cardContext);

    useEffect(() => {
        generarEventos()
    }, [])

    const generarEventos = () => {
        //traer la informacion de la bd a el componente EventoCard;
        const cards = [];
        data.eventos.map((v, i) => {
            cards.push(
                <EventoCard
                    imagen={v.imagen}
                    titulo={v.titulo}
                    fecha_inicial={v.fecha_inicial}
                    fecha_final={v.fecha_final}
                    descripcion={v.descripcion}
                    lugar={v.lugar}
                    id={v.id}
                    key={i} />)
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

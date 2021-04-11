import { createContext, useState, useEffect } from 'react';
import EventoCard from '../components/listarEventos/eventoCard';
import data from '../components/data.json'; // simulacion bd

export const cardContext = createContext();

export const CardProvider = ({ children }) => {
    const [eventos, setEventos] = useState([]);
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
                    key={i}
                />)
        })
        setEventos(cards);
    }
    return (
        <cardContext.Provider value={
            {
                eventos,
                setEventos,
                generarEventos
            }
        }>
            { children}
        </cardContext.Provider>
    )
}

import { createContext, useState } from 'react';
import EventoCard from '../components/listarEventos/eventoCard';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [eventos, setEventos] = useState([]);
    const [data, setData] = useState([]);

    const generarEventos = (d = data) => {
        let cards = [];
        d.map((v, i) => {
            cards = [...cards, (
                <EventoCard
                    info={v}
                    key={i}
                />)]
        })
        setEventos(cards);
    }
    const changeData = d => {
        setData(d);
        generarEventos(d);
    }

    return (
        <CardContext.Provider value={
            {
                eventos,
                generarEventos,
                changeData,
            }
        }>
            {children}
        </CardContext.Provider>
    )
}

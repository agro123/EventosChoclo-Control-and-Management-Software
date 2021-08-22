import { createContext, useState } from 'react';


export const EventosContext = createContext();

export const EventosProvider = ({ children }) => {
    const [eventos, setEventos] = useState([]);

    const addEventos = (e) => {
        setEventos(e)
    }

    return (
        <EventosContext.Provider value={
            {
                eventos,
                addEventos
            }
        }>
            {children}
        </EventosContext.Provider>
    )
}

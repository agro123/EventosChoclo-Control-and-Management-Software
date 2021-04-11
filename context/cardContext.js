import { createContext, useState } from 'react';

export const cardContext = createContext();

export const CardProvider = ({ children }) => {
    const [eventos, setEventos] = useState([]);
    return (
        <cardContext.Provider value={
            {eventos,
            setEventos}
        }>
            { children}
        </cardContext.Provider>
    )
}

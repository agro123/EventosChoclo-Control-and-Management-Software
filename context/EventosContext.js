import { createContext, useState } from 'react';
import useGetData from '../hooks/useGetData'

export const EventosContext = createContext();

export const EventosProvider = ({ children }) => {
    const { data, loading } = useGetData("evento", "3");

    return (
        <EventosContext.Provider value={
            {
                data,
                loading
            }
        }>
            {children}
        </EventosContext.Provider>
    )
}

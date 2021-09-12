import { createContext, useState } from 'react';


export const EventosContext = createContext();

export const EventosProvider = ({ children }) => {
    const [eventos, setEventos] = useState([]);
    const [paymentInfo, setPaymentInfo] = useState({
        name: '',
        lastName: '',
        nameCard: '',
        tickets: '1',
        cardNumber: '',
        cvc: '',
        endDate: '',
    })
    const [evento, setEvento] = useState({});

    const addEventos = (e) => {
        setEventos(e)
    }

    const addEvento = e => {
        setEvento(e);
    }

    const editPaymentInfo = pi => {
        // Recibe un objeto con el campo
        setPaymentInfo({
            ...paymentInfo,
            ...pi
        })
    }
    return (
        <EventosContext.Provider value={
            {
                evento,
                eventos,
                addEventos,
                addEvento,
                editPaymentInfo,
                paymentInfo
            }
        }>
            {children}
        </EventosContext.Provider>
    )
}

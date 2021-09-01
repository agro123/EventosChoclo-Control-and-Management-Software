import { createContext, useState } from 'react';


export const EventosContext = createContext();

export const EventosProvider = ({ children }) => {
    const [eventos, setEventos] = useState([]);
    const [paymentInfo, setPaymentInfo] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        nameCard: '',
        cardNumber: '',
        cvc: '',
        endDate: '', 
    })

    const addEventos = (e) => {
        setEventos(e)
    }

    const editPaymentInfo = pi => {
        console.log(pi)// Recibe un objeto con el campo
        setPaymentInfo({
            ...paymentInfo,
            ...pi
        })
    }
    return (
        <EventosContext.Provider value={
            {
                eventos,
                addEventos,
                editPaymentInfo,
                paymentInfo
            }
        }>
            {children}
        </EventosContext.Provider>
    )
}

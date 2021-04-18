import React, { useContext,useEffect } from 'react';
import { Carousel } from "antd";
import { CardContext } from '../../context/cardContext';
import { getEventos } from '../database/eventosCrud';

const contentStyle = {
    height: "600px",
    background: "inherit",
};
export default function Carrusel() {
    const { eventos, changeData } = useContext(CardContext);
    
    useEffect(async () => {
        try {
            const data = await getEventos();
            if (data) {
                console.log("Informacion cargada:", data)
                changeData(data);
            }
        } catch (e) {
            console.log("Ocurrio un error:", e)
        }
    }, [])
    

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

import React, { useState, useEffect, useContext } from 'react';
import Carrusel from '../../components/listarEventos/carrusel'
import { CardProvider } from '../../context/cardContext';


export default function listarEventos() {
    return (
        <CardProvider>  
                <Carrusel />
        </CardProvider>
    )
}

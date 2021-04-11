import React from 'react';
import Carrusel from '../../components/listarEventos/carrusel'
import { CardProvider } from '../../context/cardContext';

export default function listarEventos() {

    return (
        <CardProvider>
            <div>
                <Carrusel />
            </div>
        </CardProvider>
    )
}

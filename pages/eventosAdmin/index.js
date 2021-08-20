import React from 'react';
import Carrusel from '../../components/listarEventos/carrusel'
import { ReloadProvider } from '../../context/reloadContext'

export default function listarEventos() {
    return (
        <ReloadProvider>
            <Carrusel />
        </ReloadProvider>
    )
}

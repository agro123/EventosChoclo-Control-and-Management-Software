import React from 'react';
import Carrusel from '../../components/listareventos/carrusel'
import { ReloadProvider } from '../../context/reloadcontext'

export default function listarEventos() {
    return (
        <ReloadProvider>
            <div className='carrusel'>
                <Carrusel />
            </div>
        </ReloadProvider>
    )
}

import React from 'react';
import Carrusel from '../../components/listareventos/carrusel'
import { ReloadProvider } from '../../context/reloadcontext'
import useAuth from '../../hooks/useauth';

export default function listarEventos() {
    const auth = useAuth();
    return (
        
            <div className='carrusel'>
                <Carrusel />
            </div>
    )
}

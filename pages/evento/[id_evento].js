import React from 'react';
import useGetData from '../../hooks/useGetData';
import { useRouter } from 'next/router';
import EventoPage from '../../components/paginaEvento/EventoPage'
export default function Evento() {

    const router = useRouter();
    const { id_evento } = router.query;

    /* const { data, loading } = useGetData(`evento/${id_evento}`, true); */
    
    const data  =[ {
        titulo: "BIENVENIDO A EVENTOSCHOLO :D",
        imagen: '/defaultImg.jpg',
        fecha_inicial: "2000-02-29T00:00:00",
        fecha_final: "2000-03-29T00:00:00",
        descrip: "EventosChoclo...",
        lugar: "EventosChoclo",
        id_evento: 10000,
        boletas: 1000,
    }
    ]
    return (
        <>
            {data[0] ?
                <EventoPage data={data} />
                :
                <div className="eventoNotFound"><h1>Evento no encontrado</h1></div>
            }
        </>
    )
}

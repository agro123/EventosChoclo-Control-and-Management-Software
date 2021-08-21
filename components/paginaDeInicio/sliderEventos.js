import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import FechasEvento from '../Dates/fechasEvento';
import DateDisplay from './dateDisplay';
import { useDate } from '../../hooks/useDate';

const defEvento = {
    titulo: "BIENVENIDO A EVENTOSCHOLO :D",
    imagen: '/defaultImg.jpg',
    fecha_inicial: "2000-02-29T02:00:00",
    fecha_final: "2000-02-29T02:00:00",
    descrip: "Eventos Choclo...",
    lugar: "EventosChoclo",
    id_evento: 10000,
}


function SliderEventos({ info = defEvento }) {
    const { titulo, imagen, fecha_inicial, fecha_final, descrip, lugar, id_evento } = info;

    const soloFecha = fecha => fecha.slice(0, 10);
    const soloHora = hora => hora.slice(11, 16);

    const { isSameDates, day, month, year, dayName } = useDate([soloFecha(fecha_inicial), soloFecha(fecha_final)]);
    return (
        <Link href={`/evento/${id_evento}`}>
            <div className="sliderEventos">
                <div className="background-slider">
                    <div className="background-img"
                        style={{ backgroundImage: `url(${imagen})` }}
                    ></div>
                    <div className="slider-card">
                        <div
                            className="slider-img"
                            style={{ backgroundImage: `url(${imagen})` }}
                        ></div>
                        <div className="slider-text">
                            <h2 >{titulo}</h2>
                            {/*<p>{'descripcion' || description} </p> */}
                        </div>
                        {isSameDates() ?
                            <DateDisplay day={day(0)} month={month(0)} year={year(0)}
                                dayName={dayName(0)} hour={soloHora(fecha_inicial)}
                                unique={true} key="1" />
                            :
                            <>
                                <DateDisplay day={day(0)} month={month(0)} year={year(0)}
                                    dayName={dayName(0)} hour={soloHora(fecha_inicial)}
                                    last={false} key="1" />
                                <DateDisplay day={day(1)} month={month(1)} year={year(1)}
                                    dayName={dayName(1)} hour={soloHora(fecha_final)}
                                    last={true} key="2" />
                            </>
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

SliderEventos.propTypes = {

}

export default SliderEventos


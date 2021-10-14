import Head from 'next/head';
import { useDate } from '../../hooks/usedate';


const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

const BoletaPage = ({ data }) => {

    const { lugar, anfitrion, fecha_inicial, fecha_final, precio_boleta, id_boleta,
        direccion_even } = data[0];

    const soloFecha = fecha => fecha.slice(0, 10);
    const soloHora = hora => hora.slice(11, 16);

    const { isSameDates, day, month, year, dayName } = useDate([soloFecha(fecha_inicial), soloFecha(fecha_final)]);
    const styleIcon = { fontSize: '40px' }
    console.log(data[0])

    {/* <h2>Eventos Choclo</h2>
                <div>
                    <h3>{lugar} - {anfitrion} </h3>
                </div>
                <div>
                    <h3> {soloFecha(fecha_inicial)} - {soloFecha(fecha_final)} </h3>
                </div>
                <div className='desprendible'>
                    <h2>${precio_boleta}</h2>
                </div> */}

    return (
        <>
            <Head>
                <title > EventosChoclo - {anfitrion} </title>
            </Head>
            <div class="ticket">
                <div class="ticket-content-wrapper">
                    <div >
                        <p classname='nombreBoleta'> Boleta: {id_boleta} </p>
                    </div>
                    <div className='texto'>

                        <h2 >Eventos Choclo</h2>
                        <h1> {lugar} - {anfitrion} </h1>
                        <h2> {dayName(0)} {day(0)} {month(0)} - {dayName(1)} {day(1)} {month(1)} </h2>
                        <h3> {year(0)} </h3>
                    </div>
                </div>
            </div>
        </>)
}
export default BoletaPage;
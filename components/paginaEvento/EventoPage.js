import Head from 'next/head';
import DateDisplay from '../paginaDeInicio/dateDisplay';
import { useDate } from '../../hooks/useDate';
import { Divider } from 'antd';
import {
    DollarCircleFilled, EnvironmentFilled,
    NotificationFilled, ReconciliationFilled, TagFilled
} from '@ant-design/icons'
import BuyButton from './BuyButton'

const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

const EventoPage = ({ data }) => {
    const { anfitrion, descrip, fecha_final, fecha_inicial,
        direccion, id_imagen, lugar, nom_imagen, num_boletas,
        tematica, tipo_imagen, titulo } = data[0];

    const soloFecha = fecha => fecha.slice(0, 10);
    const soloHora = hora => hora.slice(11, 16);

    const { isSameDates, day, month, year, dayName } = useDate([soloFecha(fecha_inicial), soloFecha(fecha_final)]);
    const styleIcon = { fontSize: '40px' }

    return (
        <>
            <Head>
                <title > EventosChoclo - {titulo} </title>
            </Head>
            <div className="background-evento">
                <div className="background-img"
                    style={{ backgroundImage: "url(/defaultImg.jpg)" }}
                ></div>
                <img alt="evento Image"
                    className="image"
                    src={
                        "/defaultImg.jpg"}
                />
            </div>
            <div className="eventos">
                <h1>{titulo}</h1>
                <Divider orientation="left" plain />
                <div className="descripcion-evento">
                    <div className="descripcion-text">
                        <p>
                            {descrip}
                        </p>
                    </div>
                    <div className="datesEventoPage">
                        {isSameDates() ?
                            <DateDisplay day={day(0)} month={month(0)} year={year(0)}
                                dayName={dayName(0)} hour={soloHora(fecha_inicial)}
                                unique={true} key="f1" />
                            :
                            <>
                                <DateDisplay day={day(0)} month={month(0)} year={year(0)}
                                    dayName={dayName(0)} hour={soloHora(fecha_inicial)}
                                    last={false} key="f1" />
                                <DateDisplay day={day(1)} month={month(1)} year={year(1)}
                                    dayName={dayName(1)} hour={soloHora(fecha_final)}
                                    last={true} key="f2" />
                            </>
                        }
                    </div>
                    <div className="informacion">
                        <div><EnvironmentFilled key="i1" style={styleIcon} /><div className="iconInfo">
                            <span>Lugar:</span> {lugar}</div>
                        </div>
                        <div><EnvironmentFilled key="i2" style={styleIcon} /><div className="iconInfo">
                            <span>Dirección:</span> {direccion}</div>
                        </div>
                        <div><TagFilled key="i3" style={styleIcon} /><div className="iconInfo">
                            <span>Tematica:</span>{tematica}</div></div>
                        <div><NotificationFilled key="i4" style={styleIcon} />
                            <div className="iconInfo">
                                <span>Anfitrion:</span>{anfitrion}</div></div>
                        <div><ReconciliationFilled key="i5" style={styleIcon} /><div className="iconInfo">
                            <span>Número de Boletas:</span>{num_boletas}</div></div>
                        <div><DollarCircleFilled key="i6" style={styleIcon} /><div className="iconInfo">
                            <span>Precio:</span>{formatter.format(10000)}</div></div>
                    </div>
                </div>
                <div className="eventosPageActions">
                    <div className="buttons">
                        <BuyButton />
                    </div>
                </div>
            </div>
        </>)
}
export default EventoPage;
import Head from 'next/head';
import DateDisplay from '../paginadeinicio/datedisplay';
import { useDate } from '../../hooks/usedate';
import { Divider } from 'antd';
import {
    DollarCircleFilled, EnvironmentFilled,
    NotificationFilled, ReconciliationFilled, TagFilled
} from '@ant-design/icons'
import BuyButton from './buybutton'

const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

const EventoPage = ({ data }) => {
    const { anfitrion, descripcion, fecha_final, fecha_inicial,
        direccion_even, lugar, num_boletas, nom_imagen,
        tematica, url_imagen, titulo, precio_boleta } = data[0];

    const soloFecha = fecha => fecha.slice(0, 10);
    const soloHora = hora => hora.slice(11, 16);

    const { isSameDates, day, month, year, dayName } = useDate([soloFecha(fecha_inicial), soloFecha(fecha_final)]);
    const styleIcon = { fontSize: '40px' }
    console.log(data[0])

    return (
        <>
            <Head>
                <title > EventosChoclo - {titulo} </title>
            </Head>
            <div className="background-evento">
                <div className="background-img"
                    style={{ backgroundImage: `url(${url_imagen || '/defaultImg.jpg'})` }}
                ></div>
                <img alt={nom_imagen || "evento Image"}
                    className="image"
                    src={url_imagen ||
                        "/defaultImg.jpg"}
                />
            </div>
            <div className="eventos">
                <h1>{titulo}</h1>
                <Divider orientation="left" plain />
                <div className="descripcion-evento">
                    <div className="descripcion-text">
                        <p>
                            {descripcion}
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
                            <span>Dirección:</span> {direccion_even}</div>
                        </div>
                        <div><TagFilled key="i3" style={styleIcon} /><div className="iconInfo">
                            <span>Tematica:</span>{tematica}</div></div>
                        <div><NotificationFilled key="i4" style={styleIcon} />
                            <div className="iconInfo">
                                <span>Anfitrion:</span>{anfitrion}</div></div>
                        <div><ReconciliationFilled key="i5" style={styleIcon} /><div className="iconInfo">
                            <span>Boletas disponibles:</span>{num_boletas}</div></div>
                        <div><DollarCircleFilled key="i6" style={styleIcon} /><div className="iconInfo">
                            <span>Precio:</span>{formatter.format(precio_boleta)}</div></div>
                    </div>
                </div>
                <div className="eventosPageActions">
                        <BuyButton />
                </div>
            </div>
        </>)
}
export default EventoPage;
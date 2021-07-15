import Link from 'next/link';
import Slider from '../components/paginaDeInicio/slider';
import ListEventos from '../components/paginaDeInicio/listEventos';

export default function Home() {
  return (
    <>
      {/* <h1>Pagina de inicio</h1>
    <ul>
      <li><Link href="/eventosAdmin"><a  >listar/crear/editar/borrar de Eventos</a></ Link></li>
    </ul> */}
      <Slider />
      <div className="eventos">
        <h1>¡En Eventos Choclo tenemos los mejores eventos!</h1>
        <div>
          <h2>Destacado</h2>
          <ListEventos />
        </div>
        <div className="masEventos">
          <h2>Mas Eventos</h2>
          <ListEventos />
        </div>
      </div>
    </>
  )
}

import Link from 'next/link';
import Slider from '../components/paginaDeInicio/slider';
import ListEventos from '../components/paginaDeInicio/listEventos';
import EventoHomeCard from '../components/paginaDeInicio/eventoHomeCard';

export default function Home() {
  return (
    <>
      {/* <h1>Pagina de inicio</h1>
    <ul>
      <li><Link href="/eventosAdmin"><a  >listar/crear/editar/borrar de Eventos</a></ Link></li>
    </ul> */}
      <Slider />
      <div className="eventos">
        <h1 className="title-home">¡En EventosChoclo tenemos los mejores eventos!</h1>
        <div>
          <h2 className="title-home">Destacado</h2>
          <div className="destacado">
            <EventoHomeCard />
            <EventoHomeCard />
            <EventoHomeCard />
            <EventoHomeCard />
          </div>
        </div>
        <div className="masEventos">
          <h2 className="title-home">Mas Eventos</h2>
          <ListEventos />
        </div>
      </div>
    </>
  )
}

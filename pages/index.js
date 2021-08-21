import Link from 'next/link';
import Inicio from '../components/paginaDeInicio/Inicio';
import { EventosProvider } from '../context/EventosContext'

export default function Home() {
  return (
    <>
      {/* <h1>Pagina de inicio</h1>
    <ul>
      <li><Link href="/eventosAdmin"><a  >listar/crear/editar/borrar de Eventos</a></ Link></li>
    </ul> */}
      <EventosProvider>
        <Inicio />
      </EventosProvider>
    </>
  )
}

import Head from 'next/head';
import Inicio from '../components/paginadeinicio/inicio';

export default function Home() {
  return (
    <>
      {/* <h1>Pagina de inicio</h1>
    <ul>
      <li><Link href="/eventosAdmin"><a  >listar/crear/editar/borrar de Eventos</a></ Link></li>
    </ul> */}
      <Head>
        <title > EventosChoclo - inicio </title>
      </Head>
        <Inicio />
    </>
  )
}

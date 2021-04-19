import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>Pagina de inicio</h1>
    <ul>
      <li><Link href="/eventosAdmin/listarEventos"><a  >lista de Eventos</a></ Link></li>
    </ul>
    </>
  )
}

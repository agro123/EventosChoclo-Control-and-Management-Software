import "../styles/globals.css";
import "../styles/Home.css";
import "../styles/constants.css";
import '../styles/globals.css';
import '../styles/Home.css';
import '../styles/constants.css';
import '../styles/listarEventosAdmin.css';
import "../styles/Login/Login.css";
import "../styles/Login/Register.css";
import '../styles/antdMod.css';
import 'antd/dist/antd.css';
/* import "../styles/crearEventos/eventos.css"; */
import "../styles/crearEventos/cardDate.css";
import "../styles/crearEventos/eventosByCristian.css";
import "../styles/paginaInicio/inicio.css";
import "../styles/eventoCard.css";
import "../styles/paginaEvento/paginaEvento.css";
import "../styles/paginaInicio/slider.css";

import UserState from "../context/user/userstate";
import Layout from "../components/constants/layout";
import { ConfigProvider } from "antd";
import es_ES from "antd/lib/locale/es_ES";
import Head from "next/head";
import { EventosProvider } from '../context/eventoscontext';

function MyApp({ Component, pageProps }) {
  return (
    <>

      <UserState>
        <EventosProvider>
          <Head>
            <link rel="shortcut icon" href="/logocon.ico" />
            <title > EventosChoclo </title>
          </Head>
          <ConfigProvider locale={es_ES}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ConfigProvider>
        </EventosProvider>
      </UserState>
    </>
  );
}

export default MyApp;

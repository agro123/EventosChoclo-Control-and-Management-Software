import "../styles/globals.css";
import "../styles/Home.css";
import "../styles/constants.css";
import "../styles/listarEventosAdmin.css";
import "../styles/antdMod.css";
import "../styles/Login/Login.css";
import "../styles/Login/Register.css";
import '../styles/globals.css';
import '../styles/Home.css';
import '../styles/constants.css';
import '../styles/listarEventosAdmin.css';
import '../styles/antdMod.css';
import 'antd/dist/antd.css';
import "../styles/crearEventos/eventosByCristian.css";
import "../styles/paginaInicio/inicio.css";
import "../styles/eventoCard.css";
import "../styles/paginaEvento/paginaEvento.css";
import "../styles/paginaInicio/slider.css";
import UserState from "../context/User/userState";
import Layout from "../components/constants/layout";
import { ConfigProvider } from "antd";
import es_ES from "antd/lib/locale/es_ES";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ConfigProvider locale={es_ES}>
        <UserState>
          <Head>
            <title> Eventos Choclo </title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserState>
      </ConfigProvider>
    </>
  );
}

export default MyApp;

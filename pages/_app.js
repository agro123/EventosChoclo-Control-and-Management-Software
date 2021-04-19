import '../styles/globals.css';
import '../styles/Home.css';
import '../styles/constants.css';
import '../styles/listarEventosAdmin.css';
import '../styles/antdMod.css';
import 'antd/dist/antd.css';
import Layout from '../components/constants/layout';
import { ConfigProvider } from 'antd';
import es_ES from 'antd/lib/locale/es_ES';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

    return <>
        <Head>
            <title > Eventos Choclo </title> 
        </Head>
        <ConfigProvider locale={es_ES} >
            <Layout >
                <Component {...pageProps} />
            </Layout>
        </ConfigProvider> 
    </>
}

export default MyApp
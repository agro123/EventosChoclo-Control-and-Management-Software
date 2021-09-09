import React from 'react';
import useGetData from '../../hooks/usegetdata';
import { useRouter } from 'next/router';
import EventoPage from '../../components/paginaevento/eventopage';
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons";
import { EventosProvider } from '../../context/eventoscontext';

const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;

export default function Evento() {

    const router = useRouter();
    const { id_evento } = router.query;

    const { data, loading } = useGetData(`eventoCompleto/${id_evento}`, true);

    return (
        <>
            <EventosProvider>
                <Spin spinning={loading} indicator={antIcon}>
                    {
                        data[0] ?
                            <EventoPage data={data} />
                            :
                            <div className="eventoNotFound"><h1>Evento no encontrado</h1></div>
                    }
                </Spin>
            </EventosProvider>
        </>
    )
}

import React, { useState, useLayoutEffect } from 'react';
import useGetData from '../../hooks/usegetdata';
import { useRouter } from 'next/router';
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons";
import BoletaPage from '../../components/paginaevento/boletapage';

const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;

export default function Boleta() {

    const router = useRouter();
    const { id_boleta } = router.query;

    const { data, loading } = useGetData(`boleta/${id_boleta}`, true);
    console.log(data);

    return (
        <>

            <Spin spinning={loading} indicator={antIcon}>
                {
                    data[0] ?
                        <BoletaPage data={data} />
                        :
                        <div className="eventoNotFound"><h1>Boleta no encontrada</h1></div>
                }
            </Spin>
        </>
    )
}

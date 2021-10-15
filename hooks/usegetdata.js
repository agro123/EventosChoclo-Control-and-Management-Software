import { useState, useEffect } from 'react';
import axios from "axios";
import { message } from "antd";

const useGetData = (url, change) => { //retorna la informacion de una lista 
    const [result, setResult] = useState({ data: [], loading: true })

    useEffect(async () => {
        try {
            const resp = await axios.get(`/api/${url}`);
            const { status, data } = await resp;
            setTimeout(() => {
                if (status == 200) {
                    console.log("Petición GET exitosa");
                    console.log("Generando eventos en useGetData->", data)
                    setResult({ data, loading: false });
                }
            }, 700);
        } catch (e) {
            console.log("Peticion GET fallida:", e);
            setResult({ data: [], loading: false });
            message.error({ content: 'Ocurrio un error', duration: 2, style: { marginTop: '15vh' } });
        }
    }, [url,change])

    return result;
}

export default useGetData;
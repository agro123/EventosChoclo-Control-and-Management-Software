import { useState, useEffect } from 'react';
import axios from "axios";
import { message } from "antd";

const useGetData = (url, change ) => { //retorna la informacion de una lista 
    const [result, setResult] = useState({data: [], loading: true})

    useEffect(async () => {
        try {
            const resp = await axios.get(`/api/${url}`);
            const {status, data} = await resp;
            if (status == 200) {
                console.log("Petición GET exitosa");
                setResult({data, loading:false});
            }
        } catch (e) {
            console.log("Peticion GET fallida:", e);
            setResult({data:[], loading:false});
            message.error({ content: 'Ocurrio un error', duration: 2, style: { marginTop: '15vh' } });
        }
    }, [change])

    return result;
}

export default useGetData;
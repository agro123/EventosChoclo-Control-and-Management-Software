import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import {
  inicio,
  cierre,
  convertDate,
  convertirImagen,
  fechaActual,
  fechaMas1,
  validarFecha,
} from "../../components/dates/manejofechas";
import {uploadPreset,cloudinaryURL} from '../../lib/keys/keys';
import { Spin, Button } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { success, error, antIcon } from "../../components/alert/alert";
import moment from "moment";
import FormularioEventos from "../../components/dates/inputs";
import ImagenEvento from "../../components/dates/imagen";
import FechasEvento from "../../components/dates/fechasevento";

const ModificarEvento = () => {
  //Estado de la imagen como URL para mostrarla
  const [imagen, setImagen] = useState(null);
  const [evento, setEvento] = useState(null);
  const [id,setId] = useState(null);
  //Estado de la imagen formateada para enviarla
  const [formImagen, setFormImagen] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const path = require('path')
  //Estado de fecha tanto formateada como para las Cards
  const [fecha, setFecha] = useState({
    inicio: { ...inicio },
    inicioFormt: fechaActual,
    cierre: { ...cierre },
    cierreFormt: fechaMas1,
    error: false,
  });

  useEffect(()=>{
     router && router.query && setId(router.query.id_evento);
  },[router])
  //Estado del input de fecha solo para mostrarlo
  const [inputFecha, setInputFecha] = useState({
    inicio: null,
    cierre: null,
  });
  //Hook Form con el estado de todos los inputs del formulario
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const iniciarFecha = (dateI, dateF) => {
    const dateConvI = convertDate(dateI);
    const dateConvF = convertDate(dateF);
    setFecha({
      inicio: dateI ? { ...dateConvI } : inicio,
      inicioFormt: dateI ? dateI._d : fechaActual,
      cierre: dateF ? { ...dateConvF } : cierre,
      cierreFormt: dateF ? dateF._d : fechaMas1,
      error: false,
    });
  };

  useEffect(async () => {
    setLoading(true);
    try {
      if(id !== null){
      const respuesta = await axios.get(`/api/evento/${id}`);
      const dataEvento = respuesta.data[0];
      setEvento(dataEvento);
      setLoading(false);
      }
    } catch (e) {
      //setError(e);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (evento) {
      setValue("titulo", evento.titulo);
      setValue("lugar", evento.lugar);
      setValue("tematica", evento.tematica);
      setValue("direccion", evento.direccion);
      setValue("aforo", evento.aforo);
      setValue("boletas", evento.num_boletas);
      setValue("anfitrion", evento.anfitrion);
      setValue("descripcion", evento.descripcion);
      setValue("precioBol", evento.precio_boleta);
      setImagen(evento.url_imagen)
      
      let fInicial, fFinal;
      fInicial = moment(evento.fecha_inicial, "YYYY-MM-DD hh:mm Z");
      
      fFinal = moment(evento.fecha_final, "YYYY-MM-DD HH:mm Z");
      
      setInputFecha({
        inicio: fInicial,
        cierre: fFinal,
      });

      iniciarFecha(fInicial, fFinal);
    }
  }, [evento]);

  const onChangeInicio = (date) => {
    const dates = convertDate(date);

    setFecha({
      ...fecha,
      inicio: date ? { ...dates } : inicio,
      inicioFormt: date ? date._d : fechaActual,
    });
    setInputFecha({
      ...inputFecha,
      inicio: date ? date : null,
    });
  };
  //SetValue de la fecha de cierre, tanto la del input como para la Card
  const onChangeCierre = (date) => {
    const dates = convertDate(date);
    setFecha({
      ...fecha,
      cierre: date ? { ...dates } : cierre,
      cierreFormt: date ? date._d : fechaMas1,
    });
    setInputFecha({
      ...inputFecha,
      cierre: date ? date : null,
    });
  };

  const valFecha = () => {
    const valida = validarFecha(fecha.inicio, fecha.cierre);
    if (!valida) {
      setFecha({
        ...fecha,
        error: true,
      });
      return false;
    } else {
      setFecha({
        ...fecha,
        error: false,
      });
      return true;
    }
  };

  const onSubmit = async (data, e) => {
    const valida = valFecha();
    if (!valida) {
      return;
    }
    let bool = true;

    if(formImagen == null){
      bool = false;
    }

    try {

      setLoading(true);

      let idImagen = null;

      if(bool){

        const formdata = convertirImagen(formImagen,uploadPreset);

        const response = await axios.post(
          cloudinaryURL,
          formdata,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
          }
        )
        
        
        if(response.status !== 200){
          error();
          return;
        }

        const body = {
          url_imagen : response.data.secure_url,
        }
        if(evento.id_imagen){
          idImagen = await axios.put(`/api/imagen/${evento.id_imagen}`, body);
        }else{
          idImagen = await axios.post(`/api/imagen`, body);
        }
        
        
      }

      

        const body = {
          titulo : data.titulo, 
          fecha_inicial : fecha.inicioFormt, 
          fecha_final : fecha.cierreFormt, 
          num_boletas : data.boletas, 
          descripcion : data.descripcion, 
          lugar : data.lugar, 
          anfitrion : data.anfitrion, 
          tematica : data.tematica, 
          direccion : data.direccion,
          aforo : data.aforo,
          id_imagen :  evento.id_imagen ? evento.id_imagen : idImagen.data.id_imagen,
          precio_boleta : data.precioBol,

      }
      
      
      const response = await axios.put(`/api/evento/${evento.id_evento}`, body);;
      
      if(response.status === 200){
        console.log(response)
        success(data.titulo);
        resetValues(e);
        setLoading(false);
        router.push("/eventosAdmin");
      }else{
        setLoading(false);
        error();
      }
      
    } catch (err) {
      setLoading(false);
      error();
    }
  };

  const resetValues = (e) => {
    setImagen(null);
    setFormImagen(null);
    setFecha({
      ...fecha,
      inicio: { ...inicio },
      inicioFormt: fechaActual,
      cierre: { ...cierre },
      cierreFormt: fechaMas1,
      error: false,
    });
    setInputFecha({
      inicio: null,
      cierre: null,
    });
    e.target.reset();
  };

  return (
    <div className="contend">
      <Spin spinning={loading} indicator={antIcon}>
        <form
          className="form-eventos"
          id="formEvento"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              className="input-title"
              placeholder="Titulo del Evento"
              {...register("titulo", { required: true })}
            />
            {errors.titulo && (
              <span className="spanError errorTitle">
                Este campo es obligatorio
              </span>
            )}
            <hr className="event-hr" />
            <div className="cont-options">
              <div className="cont-options-img">
                <ImagenEvento
                  imagen={imagen}
                  setFormImagen={setFormImagen}
                  setImagen={setImagen}
                  name={formImagen && formImagen.name}
                />
              </div>
              <div className="options-right">
                <FechasEvento
                  fecha={fecha}
                  inputFecha={inputFecha}
                  onChangeInicio={onChangeInicio}
                  onChangeCierre={onChangeCierre}
                />
                <div className="right-inputs">
                  <FormularioEventos register={register} errors={errors} />
                </div>
              </div>
            </div>
          </div>
          <div className="cont-button">
            <Button
              className="button-crearEv"
              htmlType="submit"
              block
              size="small"
              shape="round"
              form="formEvento"
            >
              Modificar Evento
            </Button>
          </div>
        </form>
      </Spin>
    </div>
  );
};

export default ModificarEvento;

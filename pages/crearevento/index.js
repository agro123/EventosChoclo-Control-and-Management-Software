import { useState, useContext } from "react"; // Cristian hizo un cambio aquí
import { useForm } from "react-hook-form";
import { Spin, Button } from "antd";
import {uploadPreset,cloudinaryURL} from '../../lib/keys/keys';
//import { ReloadContext } from "../../context/reloadcontext"; //Cristian añadió esta linea
import {
  inicio,
  cierre,
  convertDate,
  convertirImagen,
  fechaActual,
  fechaMas1,
  validarFecha,
} from "../../components/dates/manejofechas";
import axios from "axios";
import { success, error, antIcon } from "../../components/alert/alert";
import FormularioEventos from "../../components/dates/inputs";
import ImagenEvento from "../../components/dates/imagen";
import FechasEvento from "../../components/dates/fechasevento";

export default function CrearEventos() {
  const [loading, setLoading] = useState(false);
  //const { onChange } = useContext(ReloadContext); // Cristian añadió esta linea

  //Estado de la imagen como URL para mostrarla
  const [imagen, setImagen] = useState(null);
  //Estado de la imagen formateada para enviarla
  const [formImagen, setFormImagen] = useState(null);
  //Estado de fecha tanto formateada como para las Cards
  const [fecha, setFecha] = useState({
    inicio: { ...inicio },
    inicioFormt: fechaActual,
    cierre: { ...cierre },
    cierreFormt: fechaMas1,
    error: false,
  });
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
    formState: { errors },
  } = useForm();

  //SetValue de la fecha de incio, tanto la del input como para la Card
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

  

  //Se valida ue la fecha inicial sea menor que la final
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

  //Envio de datos del evento
  const onSubmit = async (data, e) => {
    console.log("--------------->",cloudinaryURL)
    const valida = valFecha();
    if (!valida) {
      return;
    }

    let formData = null;

    if(formImagen !== null){
      formData = convertirImagen(formImagen,uploadPreset);
    }
    
    
    try {
      setLoading(true);

      let idImagen = null;

      if(formData !== null){
        const response = await axios.post(
          cloudinaryURL,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
          }
        )
        
          
          console.log(response)
        if(response.status !== 200){
          error();
          return;
        }
  
        const body = {
          url_imagen : response.data.secure_url,
        }
  
        idImagen = await axios.post("/api/imagen", body);
      }

      
        const body = {
          titulo: data.titulo,
          fecha_inicial: fecha.inicioFormt,
          fecha_final: fecha.cierreFormt,
          num_boletas: parseInt(data.boletas),
          aforo: parseInt(data.aforo),
          descripcion: data.descripcion,
          lugar: data.lugar,
          anfitrion: data.anfitrion,
          tematica: data.tematica,
          direccion: data.direccion,
          precio_boleta: data.precioBol,
          id_imagen: idImagen !== null ? idImagen.data.id_imagen : idImagen ,
        };
        
        const respuesta = await axios.post("/api/evento", body);
        
       // onChange(); //Cristian añadió esta linea
        setLoading(false);
        resetValues(e);
        success(data.titulo);
      
    } catch (err) {
      setLoading(false);
      error();
    }
  };
  //Reset de todos los datos
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
      <Spin spinning={loading} indicator={antIcon} wrapperClassName='spin'>
        <form
          className="form-eventos"
          id="formEvento"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='cont-Inputs'>
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
              size="small" /* Cristian cambio algo aquí */
              /* shape="round" */
            >
              Crear Evento
            </Button>
          </div>
        </form>
      </Spin>
    </div>
  );
}

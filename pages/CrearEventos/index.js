import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  inicio,
  cierre,
  convertDate,
  convertirImagen,
  fechaActual,
  fechaMas1,
  validarFecha,
} from "../../components/Dates/manejoFechas";
import { Button } from "antd";

import axios from "axios";
import FormularioEventos from "../../components/Dates/inputs";
import ImagenEvento from "../../components/Dates/imagen";
import FechasEvento from "../../components/Dates/fechasEvento";

export default function CrearEventos() {
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

  //Se valida ue la fecha inicial sea menor ue la final
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
    const valida = valFecha();
    if (!valida) {
      return;
    }

    const formdata = convertirImagen(formImagen);

    try {
      const idImagen = await axios.post("/api/imagen", formdata);

      if (idImagen.status === 200) {
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
          id_imagen: idImagen.data.id_imagen,
        };

        const respuesta = await axios.post("/api/evento", body);

        alert(respuesta.data);
        resetValues(e);
      } else {
        alert("No se pudo enviar la imagen, intente de nuevo");
      }
    } catch (e) {
      alert(e);
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
    });
    setInputFecha({
      inicio: null,
      cierre: null,
    });
    e.target.reset();
  };

  return (
    <div className="contend">
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
            Crear Evento
          </Button>
        </div>
      </form>
    </div>
  );
}

import { useState, useEffect } from "react";
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
import { useRouter } from "next/router";
import moment from "moment";
import FormularioEventos from "../../components/Dates/inputs";
import ImagenEvento from "../../components/Dates/imagen";
import FechasEvento from "../../components/Dates/fechasEvento";

const ModificarEvento = () => {
  //Estado de la imagen como URL para mostrarla
  const [imagen, setImagen] = useState(null);
  const [evento, setEvento] = useState({});
  //Estado de la imagen formateada para enviarla
  const [formImagen, setFormImagen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const id = router.query.id_evento;

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
      const respuesta = await axios.get(`/api/evento/2`);
      const dataEvento = respuesta.data[0];
      setEvento(dataEvento);

      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (evento) {
      setValue("titulo", evento.titulo);
      setValue("lugar", evento.lugar);
      setValue("tematica", evento.tematica);
      setValue("direccion", evento.direccion);
      setValue("aforo", evento.aforo);
      setValue("boletas", evento.num_boletas);
      setValue("anfitrion", evento.anfitrion);
      setValue("descripcion", evento.descrip);
      let fInicial, fFinal;
      fInicial = moment(evento.fecha_inicial, "YYYY-MM-DD hh:mm Z");
      fInicial.add(1, "days");
      fFinal = moment(evento.fecha_final, "YYYY-MM-DD HH:mm Z");
      fFinal.add(1, "days");
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

  const onSubmit = (data, e) => {
    const valida = valFecha();
    if (!valida) {
      return;
    }
    console.log(data);
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
            Modificar Evento
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ModificarEvento;

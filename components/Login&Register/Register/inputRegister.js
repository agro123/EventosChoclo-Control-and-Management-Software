import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { arrayInputs, arrayInputsDerecha } from "./arraysNameInputs";
import Input from "./Input";
import { Button, Image } from "antd";
import { useRouter } from "next/router";
import { message } from "antd";
import { validarEmail, validarTel, validarContra, validaExisten } from "../validador";
import UserContext from "../../../context/User/userContext";
import InputImage from "./inputImage";
import {uploadPreset,cloudinaryURL} from '../../../lib/keys/keys';
import axios from "axios";
import {
  convertirImagen,
} from "../../Dates/manejoFechas";


const InputRegister = ({tipo}) => {
  const router = useRouter();
  const { dispatch } = useContext(UserContext);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorContra, setErrorContra] = useState(false);
  const [errorTel, setErrorTel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [formImagen, setFormImagen] = useState(null);
  const [verificado, setVerificado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  

  const onSubmit = async (data, e) => {
    if (validarContra(data.contraseña, data.confContra)) {
      setErrorContra(true);
      return;
    }
    if (validarEmail(data.email)) {
      setErrorEmail(true);
      return;
    }
    if (validarTel(data.telefono)) {
      setErrorTel(true);
      return;
    }

    setLoading(true);
    setErrorContra(false);
    setErrorEmail(false);
    setErrorTel(false);

    const valirdarUser = await validaExisten(data.email,data.cedula);

    if(valirdarUser == 1){
      message.error("Ya existe un usuario con esta cedula o email", 4);
      setLoading(false);
      return;
    }else if(valirdarUser == 3){
      message.error("Ha ocurrido un error", 4);
      setLoading(false);
      return;
    }
    
    let formData = null;

    if(formImagen !== null){
      formData = convertirImagen(formImagen,uploadPreset);
    }
    
    try{

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
        message.error(`Ha ocurrido un error`,3);
        setLoading(false);
        return;
      }

      const body = {
        url_imagen : response.data.secure_url,
      }

      idImagen = await axios.post("/api/imagen", body);

      }
      

      const body ={
          email: data.email,
          nombre: data.nombre,
          apellido: data.apellido,
          cedula: data.cedula,
          celular: data.telefono,
          password: data.contraseña,
          id_imagen: idImagen !== null ? idImagen.data.id_imagen : idImagen,
          saldo : 0,
          direccion_usu: null,
          rol: tipo,
        }
        
        const respuesta = await axios.post("/api/usuario", body);
        console.log(respuesta)
        if( respuesta.status === 201){

          const datos = respuesta.data;
          console.log({datos:datos})
          if (datos.isAuth) {
            dispatch({type:'LOGIN',payload: datos});
            setVerificado(true);
            message.success(`Se ha creado el usuario: ${data.email}`);
            reset(e);
            if(datos.user.rol == 1){
              router.push('/');
            }else{
              router.push('/');
            }
          }else{
            message.error(`El email o la contraseña es invalido`,4);
            setVerificado(false);
            document.getElementById("nombre").focus()
          }
         
        }
        setLoading(false);
    }catch(error){
        setLoading(false);
        message.error("Ha susedido un problema intente mas tarde, error: " + error, 4);
          
        document.getElementById("nombre").focus()
      }
    
  };
  return (
    <form className="form-reg" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-register">
        <div className="inp-regis">
          {arrayInputs.map((inp, index) => (
            <Input
              key={index}
              register={register}
              input={inp.name}
              titulo={inp.titulo}
              error={errors}
              errorEmail={false}
              errorTel={false}
              errorContra={inp.name == "confContra" ? errorContra : false}
            />
          ))}
        </div>
        <div className="inp-regis">
          {arrayInputsDerecha.map((inp, index) => (
            <Input
              key={index}
              register={register}
              input={inp.name}
              titulo={inp.titulo}
              error={errors}
              errorEmail={inp.name == "email" ? errorEmail : false}
              errorTel={inp.name == "telefono" ? errorTel : false}
              errorContra={false}
            />
          ))}
        </div>
      </div>
      <div className="cont-avatar">
        <InputImage
          setFormImagen={setFormImagen}
          setAvatar={setAvatar}
          name={formImagen && formImagen.name}
        />

        <Image
          className="img-avatar"
          preview={false}
          width="60px"
          height="60px"
          style={{ borderRadius: "50%" }}
          src={
            avatar ||
            "https://i.pinimg.com/originals/50/f6/0a/50f60a6eb9966f0cbbfa8ef052b0d3ed.jpg"
          }
          alt="Perfil Avatar"
        />
      </div>
      <div>
        <Button
          className="button-crearEv"
          htmlType="submit"
          block
          size="small"
          disabled={loading}
        >
          Crear
        </Button>
      </div>
    </form>
  );
};

export default InputRegister;

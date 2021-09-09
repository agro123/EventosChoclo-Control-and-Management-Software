import { useState, useContext, useEffect } from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { validarEmail } from "../validador";
import UserContext from "../../../context/user/usercontext";
import { useRouter } from "next/router";
import { message } from "antd";
import axios from "axios";
import {EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

const InputLogin = () => {
  const router = useRouter();
  const { dispatch } = useContext(UserContext);
  const [errorEmail, setErrorEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verificado, setVerificado] = useState(false);
  const [verContra, setVerContra] = useState("password");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const cambio = () => {
    verContra === "text" ? setVerContra("password") : setVerContra("text");
  };

  const onSubmit = async (data, e) => {
    
    setLoading(true);
    if (validarEmail(data.emailLg)) {
      setErrorEmail(true);
      setLoading(false);
      return;
    }
    setErrorEmail(false);


    try {
      const body = {
        email: data.emailLg,
        password: data.contraLg,
      };
    
      
      await axios
          .post(`/api/auth`, body)
          .then((response) => {
            
            if (response.status === 200) {
              const data = response.data;
              if (response.data.isAuth) {
                dispatch({type:'LOGIN',payload: data});
                const nombre = data.user.nombre;
                setVerificado(true);
                
                message.success(`Bienvenido: ${data.nombre}`, 3);
                if(data.user.rol == 1){
                  router.push('/');
                }else{
                  router.push('/');
                }
                reset(e);

              }else {
                message.error(`El email o la contraseña es invalido`,4);
                setVerificado(false);
                document.getElementById("email").focus()
              }
            }
            setLoading(false);
            });
            
      } catch (error) {
        setLoading(false);
        message.error("Ha susedido un problema intente mas tarde, error: " + error, 4);
        
        document.getElementById("emailLg").focus()
      }

  };

  

  return (
    <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
      <div className="inputsFormLogin">
        <label htmlFor="emailLg">
          <h2 className="h2input">{"Correo Electronico"}</h2>
        </label>
        <input
          className="inputsLogin"
          name="emailLg"
          id="emailLg"
          type="text"
          {...register("emailLg", { required: true })}
        />
        {errors.emailLg && (
          <span className="spanError">Este campo es obligatorio</span>
        )}
        {errorEmail && (
          <span className="spanError">
            Debe ser un Email valido Ej: ej@ej.com
          </span>
        )}
      </div>
      <div className="inputsFormLogin">
        <label htmlFor="contraLg">
          <h2 className="h2input">{"Contraseña"}</h2>
        </label>

        <div class="inputsLoginContra">
        <input
          className="contraInput"
          name="contraLg"
          id="contraLg"
          type={verContra}
          {...register("contraLg", { required: true })}
        />
        <button className='buttonChangeV' type='button' onClick={()=>cambio()}>
        {verContra === 'password' ? <EyeOutlined /> : <EyeInvisibleOutlined /> }
        </button>
        </div>
        {errors.contraLg && (
          <span className="spanError">Este campo es obligatorio</span>
        )}
      </div>
      <div className="buttonLogin">
        <Button
          className="button-crearEv"
          htmlType="submit"
          block
          size="small"
          disabled={loading}
        >
          Ingresar
        </Button>
      </div>
    </form>
  );
};

export default InputLogin;

import {useState} from "react";
import { type } from "./arraysnameinputs";
import {EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import PropTypes from "prop-types";
const Input = ({
  register,
  input,
  titulo,
  error,
  errorEmail,
  errorTel,
  errorContra,
}) => {

  const [verContra, setVerContra] = useState("password");

  const cambio = () => {
    verContra === "text" ? setVerContra("password") : setVerContra("text");
  };


  const body = 
  (
  <div className="div-registerContra">
    <input  className="input-registerContra"
          name={input}
          id={input}
          type={verContra}
          {...register(input, { required: true })}
          />
      <button className='buttonChangeV' type='button' onClick={()=>cambio()}>
        {verContra === 'password' ? <EyeOutlined /> : <EyeInvisibleOutlined /> }
      </button>
  </div>
  )


  return (
    <div className="cont-input-register">
      <label className="label-register" htmlFor={input}>
        <h4 className="h4-register">{titulo}</h4>
      </label>
      <div className="cont-inp-error">
        {type(input) !== 'password' ?
        (
        <input
          className="input-register"
          name={input}
          id={input}
          type={type(input)}
          {...register(input, { required: true })}
        />
        )
        :
        body
        }
        {error[input] && (
          <span className="spanError">Este campo es obligatorio</span>
        )}
        {errorEmail && (
          <span className="spanError">
            Debe ser un Email valido Ej: ej@ej.com
          </span>
        )}
        {errorTel && (
          <span className="spanError">Debe tener entre 7 y 12 caracteres</span>
        )}
        {errorContra && (
          <span className="spanError">Las contraseñas deben coincidir</span>
        )}
      </div>
    </div>
  );
};


Input.propTypes = {
  input: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default Input;

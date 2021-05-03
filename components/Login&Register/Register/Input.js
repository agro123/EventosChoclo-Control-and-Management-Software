import React from "react";
import { type } from "./arraysNameInputs";
const Input = ({
  register,
  input,
  titulo,
  error,
  errorEmail,
  errorTel,
  errorContra,
}) => {
  return (
    <div className="cont-input-register">
      <label className="label-register" htmlFor={input}>
        <h4 className="h4-register">{titulo}</h4>
      </label>
      <div className="cont-inp-error">
        <input
          className="input-register"
          name={input}
          id={input}
          type={type(input)}
          {...register(input, { required: true })}
        />
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

export default Input;

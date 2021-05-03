import { useState, useContext } from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { validarEmail } from "../validador";
import UserContext from "../../../context/User/userContext";
import { useRouter } from "next/router";
import { message } from "antd";

const InputLogin = () => {
  const router = useRouter();
  const { dispatch } = useContext(UserContext);
  const [errorEmail, setErrorEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    setLoading(true);
    if (validarEmail(data.email)) {
      setErrorEmail(true);
      return;
    }
    const payload = {
      user: { email: data.email, contraseña: data.contra },
      token: "jashaskddj123",
      isAuth: true,
    };
    dispatch({
      type: "LOGIN",
      payload: payload,
    });
    setErrorEmail(false);
    console.log(data);
    setLoading(false);
    message.success(`Bienvenido: ${data.email}`);
    reset(e);
    router.push("/");
  };
  return (
    <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
      <div className="inputsFormLogin">
        <label htmlFor="email">
          <h2 className="h2input">{"Correo Electronico"}</h2>
        </label>
        <input
          className="inputsLogin"
          name="email"
          id="email"
          type="text"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="spanError">Este campo es obligatorio</span>
        )}
        {errorEmail && (
          <span className="spanError">
            Debe ser un Email valido Ej: ej@ej.com
          </span>
        )}
      </div>
      <div className="inputsFormLogin">
        <label htmlFor="contra">
          <h2 className="h2input">{"Contraseña"}</h2>
        </label>
        <input
          className="inputsLogin"
          name="contra"
          id="contra"
          type="password"
          {...register("contra", { required: true })}
        />
        {errors.contra && (
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

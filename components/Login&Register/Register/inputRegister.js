import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { arrayInputs, arrayInputsDerecha } from "./arraysNameInputs";
import Input from "./Input";
import { Button } from "antd";
import { useRouter } from "next/router";
import { message } from "antd";
import { validarEmail, validarTel, validarContra } from "../validador";
import UserContext from "../../../context/User/userContext";

const InputRegister = () => {
  const router = useRouter();
  const { dispatch } = useContext(UserContext);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorContra, setErrorContra] = useState(false);
  const [errorTel, setErrorTel] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
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
    console.log(data);
    const payload = {
      user: { email: data.email, contraseña: data.contraseña },
      token: "jashaskddj123",
      isAuth: true,
    };
    dispatch({
      type: "LOGIN",
      payload: payload,
    });
    setLoading(false);
    message.success(`Se ha creado el usuario: ${data.email}`);
    reset(e);
    router.push("/");
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

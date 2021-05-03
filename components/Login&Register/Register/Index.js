import React from "react";
import { Image } from "antd";
import InputRegister from "./inputRegister";

const Register = () => {
  return (
    <div className="cont-register">
      <Image
        preview={false}
        width="120px"
        height="140px"
        src={"/LoginMaiz.png"}
        alt="Imagen del Evento"
      />
      <InputRegister />
    </div>
  );
};

export default Register;

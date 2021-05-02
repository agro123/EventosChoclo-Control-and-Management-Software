import React from "react";
import { Carousel } from "antd";
import Login from "../../components/Login&Register/Login";
import Register from "../../components/Login&Register/Register";

export default function LoginAndRegister() {
  return (
    <div className="conteinerLogReg">
      <div className="carruselEventoAdmin">
        <div className="carruselHeader">
          <h1>Iniciar Sesión</h1>
          <h1>Registro</h1>
        </div>
        <Carousel
          dotPosition="top"
          style={{ width: "1000px", height: "590px" }}
        >
          <div className="changeLogin">
            <div className="conteinerLR">
              <Login />
            </div>
          </div>

          <div className="changeLogin">
            <div className="conteinerLR">
              <Register />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

import { useContext, useEffect } from "react";
import { Carousel } from "antd";
import Login from "../../components/Login&Register/Login";
import Register from "../../components/Login&Register/Register";
import UserContext from "../../context/User/userContext";
import { useRouter } from "next/router";

export default function LoginAndRegister() {
  const { user } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (user.token !== null) {
      router.push("/");
    }
  }, [user]);
  return (
    <div className="carrusel-container">
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
    </div>

  );
}

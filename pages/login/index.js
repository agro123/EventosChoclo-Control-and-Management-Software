import { useContext, useEffect } from "react";
import { Carousel } from "antd";
import Login from "../../components/loginregister/login";
import Register from "../../components/loginregister/register";
import UserContext from "../../context/user/usercontext";
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
                <Register tipo= {2} />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    

  );
}

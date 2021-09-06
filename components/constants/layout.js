import { useContext,useEffect, useState } from "react";
import { Layout } from "antd";
import Link from "next/link";
import Logo from "./logo";
import Option from "./menuOption";
import { Image } from "antd";
import {
  CopyrightOutlined, QrcodeOutlined, TwitterOutlined,
  InstagramOutlined, FacebookOutlined,
  WhatsAppOutlined, MailOutlined
} from '@ant-design/icons';
import UserContext from "../../context/User/userContext";
import Logout from "./logout";



export default function MyLayout({ children }) {
  const {user} = useContext(UserContext);
  const styleIcon = { fontSize: '40px', color: '#979A9C' }
  const [imageP,setImageP] = useState(null);

  useEffect(()=>{
    if(user.user){
      setImageP(user.user.url_imagen)
    }
  },[user])

  return (
    <>
      <Layout>
        <div className="container">
          <header className="header">
            <Logo />
            <div className="menu-header">
              <Option label="Inicio" url="/" />
              <Option label="Destacados" url="/" />
              <Option label="Cerca de mí" url="/" />
            </div>
            {user.isAuth ? (
              <div className="login-header">
                <Image preview={false}
                  width="40px"
                  height="40px"
                  src={imageP || "https://img.icons8.com/cotton/2x/login-rounded-right--v2.png"}
                />
                <Logout />
              </div>
            ) : (
              <Link href="/Login">
                <div className="login-header">
                  <Image preview={false}
                    width="40px"
                    height="40px"
                    src="https://img.icons8.com/cotton/2x/login-rounded-right--v2.png"
                  />
                  <Option label="Login" url="/Login" />
                </div>
              </Link>
            )}
          </header>
          <main className="main">{children}</main>
          <footer className='footer'>
            <div className="informacion-footer">
              <p>EventosChoclo S.A.</p>
              <p>Todos los derechos reservados {<CopyrightOutlined style={{ fontSize: '20px', color: '#979A9C' }} />}</p>
              <p>Contactanos +57 323 313 5959</p>
            </div>
            <div>
              <div>
                Desarrollado por el Equipo Dinamita c:
              </div>
              Santiago - Victor - Leonardo - Cristian
            </div>
            <div className="redesS-footer">
              <p>Nuestras Redes sociales:</p>
              <div>
                <TwitterOutlined style={styleIcon} />
                <WhatsAppOutlined style={styleIcon} />
                <InstagramOutlined style={styleIcon} />
                <FacebookOutlined style={styleIcon} />
              </div>
            </div>
          </footer>
        </div>
      </Layout>
    </>
  );
}

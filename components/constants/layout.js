import { useContext, useEffect, useState } from "react";
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
import UserContext from "../../context/user/usercontext";
import ModalPerfil from '../modalperfil';



export default function MyLayout({ children }) {
  const { user } = useContext(UserContext);
  const styleIcon = { fontSize: '40px', color: '#979A9C' }


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


              <ModalPerfil >
                <div className='cont-perfil'>

                  <h4 className='option-menu'>Perfil</h4>
                </div>
              </ModalPerfil>


            ) : (
              <Link href="/login">
                <div className="login-header">
                  <Image preview={false}
                    width="40px"
                    height="40px"
                    src="https://img.icons8.com/cotton/2x/login-rounded-right--v2.png"
                  />
                  <Option label="Login" url="/login" />
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

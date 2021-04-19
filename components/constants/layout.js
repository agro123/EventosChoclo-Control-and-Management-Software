import React from 'react'
import { Layout } from 'antd';
import Link from 'next/link';
import Logo from './logo'
import Option from './menuOption'
import { Image } from 'antd';
import {
  CopyrightOutlined, QrcodeOutlined, TwitterOutlined,
  InstagramOutlined, FacebookOutlined,
  WhatsAppOutlined, MailOutlined
} from '@ant-design/icons';
import Head from 'next/head'

export default function MyLayout({ children }) {
  return (
    <>
      <Layout>
        <div className='container'>
          <header className='header'>
            <Logo />
            <div className="menu-header">
              <Option label="Inicio" url="/" />
              <Option label="Item" url="/" />
              <Option label="Item" url="/" />
              <Option label="Item" url="/" />
              <Option label="Item" url="/" />
            </div>
            <Link href="https://www.youtube.com/">
              <div className="login-header">
                <Image preview={false}
                  width="50px"
                  height="50px"
                  src="https://img.icons8.com/cotton/2x/login-rounded-right--v2.png"
                />
                <Option label="Ingresar" url="https://www.youtube.com/" />
              </div>
            </Link>
          </header>
          <main className='main'>
            <div>{children}</div>
          </main>
          <footer className='footer'>
                <div className="informacion-footer">
                    <p>EventosChoclo S.A.</p>
                    <p>Todos los derechos reservados {<CopyrightOutlined style={{ fontSize: '20px', color: '#979A9C' }} />}</p>
                    <p>Contactanos +57 323 313 5959</p>
                </div>
                <div className="redesS-footer">
                    <p>Nuestras Redes sociales:</p>
                    <div>
                        <MailOutlined style={{ fontSize: '40px', color: '#979A9C' }} />
                        <QrcodeOutlined style={{ fontSize: '40px', color: '#979A9C' }} />
                        <TwitterOutlined style={{ fontSize: '40px', color: '#979A9C' }} />
                        <WhatsAppOutlined style={{ fontSize: '40px', color: '#979A9C' }} />
                        <InstagramOutlined style={{ fontSize: '40px', color: '#979A9C' }} />
                        <FacebookOutlined style={{ fontSize: '40px', color: '#979A9C' }} />
                    </div>
                </div>
            </footer>
        </div>
      </Layout>
    </>
  )
}
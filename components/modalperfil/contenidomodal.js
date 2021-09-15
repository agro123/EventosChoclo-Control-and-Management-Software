import { useState, useEffect } from 'react'
import axios from 'axios'
import { Image } from "antd";
import Logout from '../constants/logout';
import LabelsCont from './labelscont'
import { message } from "antd";
import Link from 'next/link';
import PropTypes from "prop-types";

const ContenidoModal = ({ id, imageP, rol,setVisible, dispatch, userCont }) => {

    const [user, setUser] = useState({

        'Nombre':'',
        'Apellido':'',
        'Cedula': '',
        'Celular': '',
        'Correo': '',
        'Dirección': '',
        'Contraseña': '',
        'Confirmar Contraseña': '',
        'Saldo': 0,

    });

    const [loading,setLoading] = useState(false);


    useEffect(async () => {

        if (id) {
            const response = await axios.get(`/api/usuario/${id}`);
            setUser({
                'Nombre': response.data[0].nombre,
                'Apellido': response.data[0].apellido,
                'Cedula': response.data[0].cedula,
                'Celular': response.data[0].celular,
                'Correo': response.data[0].email,
                'Dirección': response.data[0].direccion_usu !== 'null' ? response.data[0].direccion_usu : '',
                'Contraseña': response.data[0].password,
                'Confirmar Contraseña': response.data[0].password,
                'Saldo': response.data[0].saldo,
            });

        }

    }, [id,userCont]);

    const onSubmit = async ()=>{
        if(user.Contraseña !== user['Confirmar Contraseña']){
            message.error('Las contraseñas deben coincidir',4)
            return;
        }

        const body = {
            cedula : user['Cedula'],
            apellido: user['Apellido'],
            nombre: user['Nombre'],
            email: user['Correo'],
            celular: user['Celular'],
            direccion: user['Dirección'],
            password: user['Contraseña'],
            rol: rol,
            saldo: user['Saldo'],
        }

        setLoading(true);
        
        try{
            
            const response = await axios.put(`/api/usuario/${id}`,body);
            
            if(response.status === 200){
                
                const url_imagen = await JSON.parse(window.localStorage.getItem("user")).url_imagen;
                const id_usuario = await JSON.parse(window.localStorage.getItem("user")).id_usuario;
                const payload = {
                    email: user['Correo'],
                    id_usuario: id_usuario,
                    nombre: user['Nombre'] + ' ' + user['Apellido'],
                    rol: rol,
                    url_imagen: url_imagen,
                  }
                
                dispatch({type:'UPDATE',payload:payload});
                setLoading(false);
                setVisible(false);
                message.success('Se ha editado la información',3)
                
            }else{
                setLoading(false);
                message.error('Ha ocurrido un error',3)
            }
            
        }catch(error){
            console.log(error)
            setLoading(false);
            message.error('Ha ocurrido un error '+ error,3)
        }

        
    }


    return (
        <div className='contentP'>

            <div className='contentP-sup'>
                <div className='contentP-izq'>
                    <Image preview={false}
                        width="70px"
                        height="70px"
                        src={imageP || "https://img.icons8.com/cotton/2x/login-rounded-right--v2.png"}
                    />
                    {rol == 1 && (
                        <div className='contLinksPer'>
                            <Link href={'/register'}>
                                <a className="buttonsPerfilEditAll aLinksP">{'Crear Admin'}</a>
                            </Link>
                            <Link href={'/eventosadmin'}>
                                <a className="buttonsPerfilEditAll aLinksP">{'Administrar eventos'}</a>
                            </Link>
                        </div>
                    )}

                </div>
                <div className='contentP-der'>

                    {Object.keys(user).map((ele,index) => {
                        return <LabelsCont key={index} label={ele} value={user[ele]} setUser={setUser} user={user} />

                    })}

                </div>
            </div>
            <div className='contentP-logout'>
                <button disabled={loading} className='buttonsPerfilEditAll' onClick={()=>onSubmit()}>Editar</button>
                <Logout />
            </div>
        </div>
    )
}


ContenidoModal.propTypes = {
    id: PropTypes.number.isRequired,
    imageP: PropTypes.string.isRequired,
    rol: PropTypes.number.isRequired
  };

export default ContenidoModal;

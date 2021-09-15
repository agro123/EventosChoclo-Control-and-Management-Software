import { useState, useContext } from 'react'
import { Popover } from 'antd';
import ContenidoModal from './contenidomodal'
import UserContext from '../../context/user/usercontext';
import PropTypes from "prop-types";

const ModalPerfil = ({ children }) => {
    const { user, dispatch } = useContext(UserContext);
    const [visible, setVisible] = useState(false);


    return (

        <Popover
            content={<ContenidoModal id={user.user.id_usuario}
                imageP={user.user.url_imagen}
                rol={user.user.rol}
                visible={visible}
                setVisible={setVisible}
                dispatch={dispatch} 
                userCont={user}
               />}
            title={<h3>Bienvenido {user.user.nombre}</h3>}
            trigger="click"
            visible={visible}
            onVisibleChange={() => setVisible(!visible)}
        >
            {children}
        </Popover>

    )
}

ModalPerfil.propTypes = {
    children: PropTypes.element.isRequired,
  };

export default ModalPerfil;

import {useState} from 'react'
import { message } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'


const EditInput = ({setUser, label, value, visible, setVisible , user}) => {
    const [valor,setValor] = useState(value);
    const [error,setError] = useState(false);
    const [verContra, setVerContra] = useState("password");

    const validar = (key) => {
        if(key === 'Correo' && /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
            return false;
        }else if( key !== 'Correo'){
            return false;
        }else{
            return true;
        }
    } 

    const onSubmit = ()=>{
        if(valor === '' && (label !== 'Dirección')){
            
            message.error(`El campo no debe estar vacio`, 4);
            return;
        }
        if(validar(label)){
            setError(true);
            return;
        }
        
        setError(false);
        setUser({...user, [label] : valor });
        
        setVisible(!visible);
    }

    const tipo = (type) =>{
        switch (type){
            case 'Celular':
                return 'number';
            case 'Cedula' :
                return 'number';
            case 'Correo':
                return 'email';
            case 'Dirección':
                return 'text';
            case 'Contraseña':
                return 'password';
            case 'Confirmar Contraseña':
                return 'password';
            case 'Saldo':
                return 'number';
        }
    }


    const cambio = () => {
        verContra === "text" ? setVerContra("password") : setVerContra("text");
      };


    const seeError = () =>{
        let displayError = '';

        switch(label){
            case 'Correo':
                displayError = 'Debe ser un Email valido Ej: ej@ej.com';
                break;
        }
        return displayError;
    }
    return (
        <div className='contEditPer'>
            {label === 'Contraseña' || label === 'Confirmar Cnntraseña' ?
                (
                <div class="inputsLoginContra">
                    <input
                        className="contraInput"
                        name="contraLg"
                        id="contraLg"
                        value={valor}
                        type={verContra}
                        onChange = {(e)=>setValor(e.target.value)}
                    />
                    <button className='buttonChangeV' type='button' onClick={() => cambio()}>
                        {verContra === 'password' ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </button>
                </div>
            )
            :
            <input className="inputsLogin perfilInput" value={valor} type={tipo(label)} onChange = {(e)=>setValor(e.target.value)} />
          }
            <div>
                <span className="spanError mt-1 mb-1">
                    {error && seeError()}
                </span>
            </div>
            <div className='editarBotons'>
            <button className='buttonsPerfilEdit' onClick={()=>onSubmit()}>Editar</button>
            <button className='buttonsPerfilEdit' onClick={()=>{
                setVisible(!visible);
                setValor(value);
                setError(false);
                }}>Cerrar</button>
            </div>
        </div>
    )
}

export default EditInput

import axios from "axios";
import { message } from "antd";

export const validarEmail = (email) => {
  if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    ) &&
    email.length !== 0
  ) {
    return true;
  } else {
    return false;
  }
};

export const validarTel = (tel) => {
  if ((tel.length <= 6 || tel.length >= 13) && tel.length !== 0) {
    return true;
  } else {
    return false;
  }
};

export const validarContra = (contra, confContra) => {
  if (contra !== confContra && contra !== "" && confContra !== "") {
    return true;
  } else {
    return false;
  }
};


export const validaExisten = async (email,cedula) => {
  const body = {
    email: email,
    cedula: cedula,
  }
  try{
  const response = await axios.get('/api/usuario/getuser',body);
    
  if(response.data.length !== 0){
    return 1;
  }else{
    return 2;
  }

  }catch(error){
    message.error(`Ha ocurrido un error: ` +error ,3);
    return 3;
  }

  
}

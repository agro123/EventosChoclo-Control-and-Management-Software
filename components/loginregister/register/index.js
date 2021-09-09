import { Image } from "antd";
import PropTypes from "prop-types";
import InputRegister from "./inputregister";

const Register = ({tipo}) => {
  
  
  return (
    <div className="cont-register">
      <Image
        preview={false}
        width="120px"
        height="140px"
        src={"/LoginMaiz.png"}
        alt="Imagen del Evento"
      />
      <InputRegister tipo={tipo} />
    </div>
  );
};

Register.propTypes = {
  tipo: PropTypes.number.isRequired,
};

export default Register;

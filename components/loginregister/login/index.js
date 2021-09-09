import { Image } from "antd";
import InputLogin from "./inputlogin";

const Login = () => {
  return (
    <div className="cont-login">
      <Image
        preview={false}
        width="120px"
        height="140px"
        src={"/LoginMaiz.png"}
        alt="Imagen del Evento"
      />
      <InputLogin />
    </div>
  );
};

export default Login;

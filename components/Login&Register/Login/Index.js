import { useState, useContext, useEffect } from "react";
import { Image, Button } from "antd";
import InputLogin from "./InputLogin";
import UserContext from "../../../context/User/userContext";
import { useRouter } from "next/router";

const Login = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (user.token !== null) {
      router.push("/");
    }
  }, [user]);
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

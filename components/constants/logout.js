import React, { useContext } from "react";
import UserContext from "../../context/user/usercontext";
import { message } from "antd";

const Logout = () => {
  const { dispatch } = useContext(UserContext);
  return (
    <button
      className="option-button"
      onClick={() => {
        dispatch({
          type: "LOGOUT",
        });
        message.info("Se ha cerrado sesión exitosamente");
      }}
    >
      Logout
    </button>
  );
};

export default Logout;

import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const success = (tituloEv) => {
  message.success(`Se ha creado el Evento: ${tituloEv}`);
};

const error = () => {
  message.error("Ocurrio un error");
};

const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;

export { success, error, antIcon };

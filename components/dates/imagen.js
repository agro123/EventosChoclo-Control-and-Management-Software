import React from "react";
import { Image } from "antd";

const ImagenEvento = ({ imagen, setFormImagen, setImagen, name }) => {
  const nombre = () => {
    if (name.length > 28) {
      return `${name.substring(0, 28)} ...`;
    } else {
      return `${name}`;
    }
  };
  return (
    <>
      <div className="cont-img">
        <Image
          preview={false}
          width="100%"
          height="300px"
          src={
            imagen ||
            "https://i.pinimg.com/originals/50/f6/0a/50f60a6eb9966f0cbbfa8ef052b0d3ed.jpg"
          }
          alt="Imagen del Evento"
        />
      </div>
      <label className="custom-file-upload">
        <input
          className="input-img"
          type="file"
          name="imagen"
          accept="image/*"
          onChange={(e) => {
            setFormImagen(e.target.files[0]);
            setImagen(URL.createObjectURL(e.target.files[0]));
          }}
        />
        {!name ? "Click aqui para subir la imagen del evento." : `${nombre()}`}
      </label>
    </>
  );
};

export default ImagenEvento;

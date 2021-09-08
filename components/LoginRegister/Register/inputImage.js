import React from "react";

const InputImage = ({ setFormImagen, setAvatar, name }) => {
  const nombre = () => {
    if (name.length > 22) {
      return `${name.substring(0, 22)} ...`;
    } else {
      return `${name}`;
    }
  };
  return (
    <label className="custom-file-uploadR">
      <input
        className="input-img"
        type="file"
        name="imagen"
        accept="image/*"
        onChange={(e) => {
          setFormImagen(e.target.files[0]);
          setAvatar(URL.createObjectURL(e.target.files[0]));
        }}
      />
      {!name ? "Click aqui para subir su Avatar" : `${nombre()}`}
    </label>
  );
};

export default InputImage;

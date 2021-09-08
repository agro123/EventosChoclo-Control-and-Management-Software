export const arrayInputs = [
  { titulo: "Nombre: ", name: "nombre" },
  { titulo: "Apellido: ", name: "apellido" },
  { titulo: "Contraseña: ", name: "contraseña" },
  { titulo: "Confirmar Contraseña: ", name: "confContra" },
];

export const arrayInputsDerecha = [
  { titulo: "Cedula: ", name: "cedula" },
  { titulo: "Edad: ", name: "edad" },
  { titulo: "Teléfono: ", name: "telefono" },
  { titulo: "Correo Electrónico: ", name: "email" },
];

export const type = (name) => {
  if (name == "cedula" || name == "edad" || name == "telefono") {
    return "number";
  } else if (name == "contraseña" || name == "confContra") {
    return "password";
  } else {
    return "text";
  }
};

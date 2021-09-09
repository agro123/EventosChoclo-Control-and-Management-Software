import { LOGIN, LOGOUT, UPDATE } from "./types";


const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOGIN:
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("token", JSON.stringify(payload.token));
      return {
        ...state,
        isAuth: true,
        user: payload.user,
        token: payload.token,
      };
    case  (UPDATE):
      
        const userI = {
          email: payload.email,
          id_usuario: payload.id_usuario,
          nombre: payload.nombre,
          rol: payload.rol,
          url_imagen: payload.url_imagen,
        }
        localStorage.setItem("user", JSON.stringify(userI));
        return {
         ...state,
         user: userI,
       };
      
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;


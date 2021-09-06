import pool from "../../../lib/bd";
import  keys   from "../../../lib/keys/keys.js"
const password = keys.crypto;
import {Cipher} from '../../../components/Encriptar'
const jwt = require("jsonwebtoken");


const crearToken = (usuario) => {
  return jwt.sign(usuario, password, {expiresIn: '6h' })
};

export default async (req, res) => {
  try {
    const {
      method,
      body: {
        cedula,
        apellido,
        nombre,
        email,
        celular,
        direccion_usu,
        password,
        rol,
        saldo,
        id_imagen,
      },
    } = req;

    const cliente = await pool.connect();
    
    switch (method) {
      case "GET":
        const usuario = await cliente.query("SELECT * FROM usuario");
        usuario.rows.forEach(elemento => elemento.password = Cipher.desencriptar(elemento.password) );
        res.status(200).json(usuario.rows);
        cliente.release();
        break;
      case "POST":
        //const pass = Cipher.encriptar(password);
        
        const response = await cliente.query(
          `INSERT INTO usuario (cedula, apellido, nombre, email, celular, direccion_usu, password, rol, saldo, id_imagen) 
          VALUES('${cedula}', '${apellido}', '${nombre}', '${email}', '${celular}', '${direccion_usu}', 
          '${password}', ${rol}, ${saldo}, ${id_imagen}) returning id_usuario`
        );
        const { id_usuario } = response.rows[0];
        const user = {
            id_usuario: id_usuario,
            nombre: nombre + ' ' + apellido,
            email: email,
            rol: rol,
            id_imagen: id_imagen,
        }
        res
          .status(201)
          .send({ token: crearToken(user),
            isAuth: true,
            user });
        cliente.release();
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Metodo ${method} Invalido`);
        cliente.release();
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

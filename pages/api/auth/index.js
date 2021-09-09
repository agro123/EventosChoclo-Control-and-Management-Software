import pool from "../../../lib/bd";
import {Cipher} from '../../../components/encriptar'
import  keys   from "../../../lib/keys/keys.js"
const jwt = require("jsonwebtoken");
const password = keys.crypto;


const crearToken = (usuario) => {
    return jwt.sign(usuario, password, {expiresIn: '6h' })
};


export default async (req, res) => {
    
   const {method} = req;
   if(method === 'POST'){
    try {
        
        const cliente = await pool.connect();

        const { email, password } = req.body;
        const response = await cliente.query(
            "select * from usuario natural join imagenes where email = $1",
            [email]
        );
        if (response.rowCount > 0) {
            const usuario = response.rows[0];
            //const decipher = Cipher.desencriptar(usuario.password);
            if (usuario.password === password){
            const user = {
                id_usuario: usuario.id_usuario,
                nombre: usuario.nombre + ' ' + usuario.apellido,
                email: usuario.email,
                rol: usuario.rol,
                url_imagen: usuario.url_imagen,
            }
                cliente.release();
            return res.send({token: crearToken(user),
                    isAuth: true,
                    user
                });
            }
        } 


        cliente.release();
        return res.send({isAuth: false});
        
    } catch (e) {
        res.status(e.status || 500).end(e.message);
    }
    }else{
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Metodo ${method} Invalido`);
        
    }

};

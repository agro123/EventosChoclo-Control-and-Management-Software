import pool from "../../../lib/bd";


export default async (req, res) => {
  try {
    const {
      method,
      body: { cedula, apellido, nombre, email, celular, direccion, password, rol, saldo },
    } = req
    switch (method) {
      case 'GET':
        const usuario = await pool.query('SELECT * FROM usuario');
        res.status(200).json(usuario.rows);
        break
      case 'POST':
        const response =await pool.query(
          `INSERT INTO usuario (cedula, apellido, nombre, email, celular, direccion_usu, password, rol, saldo) 
          VALUES('${cedula}', '${apellido}', '${nombre}', '${email}', '${celular}', '${direccion}', 
          '${password}', ${rol}, ${saldo}) returning id_usuario`
        );
        const {id_usuario} = response.rows[0];
        res.status(201).json({id_usuario,
          mensaje:'Usuario REGISTRADO con exito'});
        break
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Metodo ${method} Invalido`);
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message)
  }
}


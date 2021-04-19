import pool from "../../../lib/bd";


export default async (req, res) => {
  try {
    const {
      query: { id },
      method,
      body: { cedula, apellido, nombre, email, celular, direccion, password, rol, saldo },
    } = req

    switch (method) {
      case 'GET':
        const evento = await pool.query(`SELECT * FROM usuario where id_usuario = ${id}`);
        res.status(200).json(evento.rows);
        break
      case 'PUT':
        await pool.query(
          `UPDATE usuario SET nombre = '${nombre}', apellido= '${apellido}', cedula = '${cedula}',
          email='${email}' , celular='${celular}', direccion='${direccion}', password='${password}',
          rol=${rol}, saldo=${saldo} WHERE id_usuario = ${id}`
        );
        res.status(200).json('Usuario ACTUALIZADO con exito');
        break
      case 'DELETE':
        await pool.query(
          `DELETE FROM usuario WHERE id_usuario = ${id}`
        );
        res.status(200).json('Usuario ELIMINADO con exito');
        break
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message)
  }
}

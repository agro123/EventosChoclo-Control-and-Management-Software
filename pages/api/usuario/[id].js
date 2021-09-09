import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
      query: { id },
      method,
      body: {
        cedula,
        apellido,
        nombre,
        email,
        celular,
        direccion,
        password,
        rol,
        saldo,
      },
    } = req;

    const cliente = await pool.connect();

    switch (method) {
      case "GET":
        const evento = await cliente.query(
          `SELECT * FROM usuario where id_usuario = ${id}`
        );
        res.status(200).json(evento.rows);
        cliente.release();
        break;
      case "PUT":
        await cliente.query(
          `UPDATE usuario SET nombre = '${nombre}', apellido= '${apellido}', cedula = '${cedula}',
          email='${email}' , celular='${celular}', direccion_usu='${direccion}', password='${password}',
          rol=${rol}, saldo=${saldo} WHERE id_usuario = ${id}`
        );
        res.status(200).json("Usuario ACTUALIZADO con exito");
        cliente.release();
        break;
      case "DELETE":
        await cliente.query(`DELETE FROM usuario WHERE id_usuario = ${id}`);
        res.status(200).json("Usuario ELIMINADO con exito");
        cliente.release();
        break;
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

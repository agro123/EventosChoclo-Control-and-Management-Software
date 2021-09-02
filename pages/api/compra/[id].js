import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
      query: { id },
      method,
      body: {
        id_usuario,
        id_evento,
        fecha_compra,
        num_boletas,
        total_compra,
        nombre_cli,
        apellido_cli,
      },
    } = req;

    const cliente = await pool.connect();

    switch (method) {
      case "GET":
        const compra = await cliente.query(
          `select * from compra where id_compra = ${id}`
        );
        res.status(200).json(compra.rows);
        cliente.release();
        break;
      case "PUT":
        await cliente.query(
          `UPDATE compra SET id_usuario = $1,
          id_evento = $2,
          fecha_compra = $3,
          num_boletas = $4,
          total_compra = $5,
          nombre_cli = $6,
          apellido_cli = $7
          where id_compra = $8`,
          [
            id_usuario,
            id_evento,
            fecha_compra,
            num_boletas,
            total_compra,
            nombre_cli,
            apellido_cli,
            id,
          ]
        );
        res.status(200).json("Compra ACTUALIZADA");
        cliente.release();
        break;
      case "DELETE":
        await cliente.query(`DELETE FROM compra WHERE id_compra = ${id}`);
        res.status(200).json("Compra ELIMINADA");
        cliente.release();
        break;
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

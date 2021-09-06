import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
      query: { id },
      method,
      body: {
        nom_imagen, 
        tipo_imagen, 
        url_imagen,
      },
    } = req;

    const cliente = await pool.connect();

    switch (method) {
      case "GET":
        const imagen = await cliente.query(
          `SELECT * FROM imagenes WHERE id_imagen = ${id}`
        );
        res.status(200).json(imagen.rows);
        cliente.release();
        break;
      case "PUT":
        const response = await cliente.query(
          `UPDATE imagenes SET nom_imagen = $1, tipo_imagen = $2, url_imagen = $3 WHERE id_imagen = $4`,
          [nom_imagen, tipo_imagen, url_imagen, id]
        );
        res.status(200).json("imagen ACTUALIZADA");
        cliente.release();
        break;
      case "DELETE":
        await cliente.query(`DELETE FROM imagenes WHERE id_imagen = ${id}`);
        res.status(200).json("Evento ELIMINADO");
        cliente.release();
        break;
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

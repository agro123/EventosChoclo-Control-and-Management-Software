import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
      query: { id },
      method,
      body: {
        titulo,
        fecha_inicial,
        fecha_final,
        num_boletas,
        descripcion,
        lugar,
        anfitrion,
        tematica,
        direccion,
        aforo,
        id_imagen,
        precio_boleta,
      },
    } = req;

    const cliente = await pool.connect();

    switch (method) {
      case "GET":
        
        const evento = await cliente.query(
          `select * from evento_imagen where id_evento = ${id}`
        );
        
        res.status(200).json(evento.rows);
        cliente.release();
        break;
      case "PUT":
        await cliente.query(
          `UPDATE evento SET titulo = $1, 
          fecha_inicial = $2, 
          fecha_final = $3, 
          num_boletas = $4, 
          descrip = $5, 
          lugar = $6, 
          anfitrion = $7, 
          tematica = $8, 
          direccion = $9,
          aforo = $10,
          id_imagen = $11,
          precio_boleta = $12
          WHERE id_evento = $13`,
          [
            titulo,
            fecha_inicial,
            fecha_final,
            num_boletas,
            descripcion,
            lugar,
            anfitrion,
            tematica,
            direccion,
            aforo,
            id_imagen,
            precio_boleta,
            id,
          ]
        );
        res.status(200).json("Evento ACTUALIZADO");
        cliente.release();
        break;
      case "DELETE":
        await cliente.query(`DELETE FROM evento WHERE id_evento = ${id}`);
        res.status(200).json("Evento ELIMINADO");
        cliente.release();
        break;
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

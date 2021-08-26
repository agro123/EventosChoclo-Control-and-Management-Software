import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
      query: { id },
      method,
      body: { titulo,
        fecha_inicial,
        fecha_final,
        num_boletas,
        descripcion,
        lugar,
        anfitrion,
        tematica,
        direccion,
        aforo,
      id_imagen },
    } = req

    switch (method) {
      case 'GET':
        const evento = await pool.query(`select * from evento_imagen where id_evento = ${id}`);
        res.status(200).json(evento.rows);
        break
      case 'PUT':
        await pool.query(
          `UPDATE evento SET titulo = $1, 
          fecha_inicial = $2, 
          fecha_final = $3, 
          num_boletas = $4, 
          descrip = $5, 
          lugar = $6, 
          anfitrion = $7, 
          tematica = $8, 
          direccion = $9,
          aforo = $10
          id_imagen = $11
          WHERE id_evento = $12`,
          [titulo, fecha_inicial, fecha_final, num_boletas, descripcion,
            lugar, anfitrion, tematica, direccion, aforo, id_imagen, id]
        );
        res.status(200).json('Evento ACTUALIZADO');
        break
      case 'DELETE':
        await pool.query(
          `DELETE FROM evento WHERE id_evento = ${id}`
        );
        res.status(200).json('Evento ELIMINADO');
        break
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message)
  }
}

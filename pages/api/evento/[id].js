import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
    query: {id},
    method,
    body: {titulo, 
      fecha_inicial, 
      fecha_final, 
      num_boletas, 
      descripcion, 
      lugar, 
      anfitrion,
      tematica, 
      direccion},
  } = req
      
    switch (method) {
      case 'GET':
        const evento = await pool.query(`select * from evento natural join imagenes where id_evento = ${id}`);
        res.status(200).json(evento.rows);
        break
      case 'PUT':
        await pool.query(
          `UPDATE evento SET titulo = '${titulo}', 
          fecha_inicial = '${fecha_inicial}', 
          fecha_final = '${fecha_final}', 
          num_boletas = ${num_boletas}, 
          descripcion = '${descripcion}', 
          lugar = '${lugar}', 
          anfitrion = '${anfitrion}', 
          tematica = '${tematica}'
          direccion = '${direccion}'
          WHERE id_evento = ${id}`
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
    //res.status(200).json('hola');
    //res.status(200).json(evento.rows);
  } catch (e) {
    res.status(e.status || 500).end(e.message)
  }
}

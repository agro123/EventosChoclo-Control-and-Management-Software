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
      nom_imagen, 
      tipo, 
      datos, 
      tematica, 
      direccion},
  } = req
      
    switch (method) {
      case 'GET':
        const evento = await pool.query(`SELECT * FROM evento where id_evento = ${id}`);
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
          nom_imagen = '${nom_imagen}', 
          tipo = '${tipo}', 
          datos = '${datos}', 
          tematica = '${tematica}'
          direccion = '${direccion}'
          WHERE id_evento = ${id}`
        );
        res.status(200).json('hiciste un put');
        break
      case 'DELETE':
        await pool.query(
          `DELETE FROM evento WHERE id_evento = ${id}`
        );
        res.status(200).json('hiciste un delete');
        break
    } 
    //res.status(200).json('hola');
    //res.status(200).json(evento.rows);
  } catch (e) {
    res.status(e.status || 500).end(e.message)
  }
}

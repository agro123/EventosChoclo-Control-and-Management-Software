import pool from "../../../lib/bd";


export default async (req, res) => {
  try {
    const {
    query: {id},
    method,
    body: {id_evento, id_usuario},
  } = req
      
    switch (method) {
      case 'GET':
        const boleta = await pool.query(`SELECT * FROM boleta where id_boleta = ${id}`);
        res.status(200).json(boleta.rows)
        break
      case 'PUT':
        await pool.query(
          `UPDATE boleta SET  id_usuario = ${id_usuario}, id_evento= ${id_evento}
          WHERE id_boleta = ${id}`
        );
        res.status(200).json(`Se a ACTUALIZADO la boleta #${id}`)
        break
      case 'DELETE':
        await pool.query(
          `DELETE FROM boleta WHERE id_boleta = ${id}`
        )
        res.status(200).json(`Se a ELIMINADO la boleta #${id}`)
        break
    } 
  } catch (e) {
    res.status(e.status || 500).end(e.message)
  }
}

import pool from "../../../lib/bd";


export default async (req, res) => {
  try {
    const {
    method,
    body: {id_evento, id_usuario},
  } = req

    switch (method) {
      case 'GET':
        const boleta = await pool.query('SELECT * FROM boleta');
        res.status(200).json(boleta.rows);
        break
      case 'POST':
        await pool.query(
          `INSERT INTO boleta (id_usuario, id_evento) VALUES(${id_usuario}, ${id_evento})`
        );
        res.status(200).json('hiciste un post');
        break
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Metodo ${method} Invalido`)
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message)
  }
}


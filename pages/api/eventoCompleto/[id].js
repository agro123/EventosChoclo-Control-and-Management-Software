import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const { query: { id },
    method } = req;

    if (method === "GET") {
      const evento = await pool.query(`select * from evento_completo where id_evento = ${id}`);
      return res.status(200).json(evento.rows);
    }
    res.setHeader("Allow", "GET");
    res.status(405).end(`Metodo ${method} Invalido`);
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

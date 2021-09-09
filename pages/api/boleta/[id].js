import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
      query: { id },
      method,
    } = req;

    const cliente = await pool.connect();
    
    if (method === "GET") {
      const evento = await cliente.query(
        `select * from boleta_completa where id_boleta = ${id}`
      );
      cliente.release();
      return res.status(200).json(evento.rows);
    }
    res.setHeader("Allow", "GET");
    res.status(405).end(`Metodo ${method} Invalido`);
    cliente.release();
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

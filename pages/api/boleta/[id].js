import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
      query: { id },
      method,
    } = req;

    const cliente = await pool.connect();
    

    if(method == "GET")
    {
      const boleta = await cliente.query(
        `SELECT * FROM boleta_completa WHERE id_boleta = ${id}`
      );
      res.status(200).json(boleta.rows);
    }
    
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

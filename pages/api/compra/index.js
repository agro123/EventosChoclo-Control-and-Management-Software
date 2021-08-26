import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
      method,
      body: {
        id_usuario,
        id_evento,
        fecha_compra,
        num_boletas,
        total_compra,
        nombre_cli,
        apellido_cli,
      },
    } = req;

    switch (method) {
      case "GET":
        const evento = await pool.query("select * from compra");
        res.status(200).json(evento.rows);
        break;
      case "POST":
        const compra = await pool.query(
          `INSERT INTO compra (id_usuario,
            id_evento,
            fecha_compra,
            num_boletas,
            total_compra,
            nombre_cli,
            apellido_cli)
            VALUES($1, $2, $3, $4, $5, $6, $7) returning id_compra`,
          [
            id_usuario,
            id_evento,
            fecha_compra,
            num_boletas,
            total_compra,
            nombre_cli,
            apellido_cli,
          ]
        );
        const {id_compra} = compra.rows[0]
        res.status(201).json({id_compra, mensage:`Compra exitosa`});
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Metodo ${method} Invalido`);
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

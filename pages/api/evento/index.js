import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
      method,
      body: {
        titulo,
        fecha_inicial,
        fecha_final,
        precio_boleta,
        descripcion,
        lugar,
        anfitrion,
        tematica,
        direccion,
        aforo,
        id_imagen
      },
    } = req;

    switch (method) {
      case "GET":
        const evento = await pool.query("select * from evento_imagen");
        res.status(200).json(evento.rows);
        break;
      case "POST":
        await pool.query(
          `INSERT INTO evento (titulo, fecha_inicial, fecha_final, precio_boleta, descripcion,
            lugar, anfitrion, tematica, direccion_even, aforo, id_imagen)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
          [
            titulo,
            fecha_inicial,
            fecha_final,
            precio_boleta,
            descripcion,
            lugar,
            anfitrion,
            tematica,
            direccion,
            aforo,
            id_imagen
          ]
        );
        res.status(201).json(`Se REGISTRO el evento ${titulo}`);
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Metodo ${method} Invalido`);
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

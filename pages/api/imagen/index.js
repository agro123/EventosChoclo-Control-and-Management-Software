import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
      method,
      body: {
        nom_imagen, 
        tipo_imagen, 
        url_imagen,
      },
    } = req;

    const cliente = await pool.connect();

    switch (method) {
      case "GET":
        const evento = await cliente.query("SELECT * FROM imagenes");
        res.status(200).json(evento.rows);
        cliente.release();
      case "POST":

        const response = await cliente.query(
          `INSERT INTO imagenes (nom_imagen, tipo_imagen, url_imagen)
            VALUES($1, $2, $3) returning id_imagen`,
          [nom_imagen, tipo_imagen, url_imagen]
        );
      
        res.status(201).json(response.rows[0]);
        cliente.release();
        
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Metodo ${method} Invalido`);
        cliente.release();
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

import pool from "../../../../lib/bd";


export default async (req, res) => {
  try {
    const {
      method,
      body : {
          cedula,
          email,
      }
    } = req;

    const cliente = await pool.connect();

    switch (method) {
      case "GET":
        const usuario = await cliente.query("SELECT cedula, email FROM usuario");
        const arrayUser = usuario.rows.filter(elemento => elemento.cedula == cedula || elemento.email == email );
        res.status(200).json(arrayUser);
        cliente.release();
        break;

      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Metodo ${method} Invalido`);
        cliente.release();
        break;
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
};

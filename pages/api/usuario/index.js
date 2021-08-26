import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
      method,
      body: {
        cedula,
        apellido,
        nombre,
        email,
        celular,
        direccion,
        password,
        rol,
        saldo,
      },
    } = req;

    const cliente = await pool.connect();

    switch (method) {
      case "GET":
        const usuario = await cliente.query("SELECT * FROM usuario");
        res.status(200).json(usuario.rows);
        cliente.release();
        break;
      case "POST":
        const response = await cliente.query(
          `INSERT INTO usuario (cedula, apellido, nombre, email, celular, direccion_usu, password, rol, saldo) 
          VALUES('${cedula}', '${apellido}', '${nombre}', '${email}', '${celular}', '${direccion}', 
          '${password}', ${rol}, ${saldo}) returning id_usuario`
        );
        const { id_usuario } = response.rows[0];
        res
          .status(201)
          .json({ id_usuario, mensaje: "Usuario REGISTRADO con exito" });
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

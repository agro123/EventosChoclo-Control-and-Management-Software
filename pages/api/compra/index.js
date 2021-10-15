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

    const cliente = await pool.connect();

    switch (method) {
      case "GET":
        const evento = await cliente.query("select * from compra");
        res.status(200).json(evento.rows);
        cliente.release();
        break;
      case "POST":
        const compra = await cliente.query(
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
        const { id_compra } = compra.rows[0];

        const email = await cliente.query(
          `select * from usuario where id_usuario = ${id_usuario}`
        );
        
        const enviar = {
          id_compra: id_compra,
          email : email.rows[0].email
        }

        // ENVIO DEL EMAIL /*
        console.log('Está llegando aqui');
        fetch('https://eventoschoclo.herokuapp.com/api/boleta/mailer', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(enviar)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
            }
        })
        console.log('ya salió');
        // ENVIO DEL EMAIL */
        res.status(201).json({ id_compra, mensage: `Compra exitosa` });
        
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

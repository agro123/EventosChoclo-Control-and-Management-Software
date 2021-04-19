import pool from "../../../lib/bd";

export default async (req, res) => {
  try {
    const {
      method,
       body: {titulo,
        fecha_inicial,
        fecha_final,
        num_boletas,
        descripcion,
        lugar,
        anfitrion,
        id_imagen,
        tematica,
        direccion},
    } = req

    switch (method) {
      case 'GET':
        const evento = await pool.query('select * from evento natural join imagenes');
        res.status(200).json(evento.rows);
        break
      case 'POST':
        await pool.query(
          `INSERT INTO hola (titulo, fecha_inicial, fecha_final, num_boletas, descripcion,
            lugar, anfitrion, id_imagen, tematica, direccion)
            VALUES('${titulo}', '${fecha_inicial}', '${fecha_final}', ${num_boletas}, '${descripcion}',
              '${lugar}', '${anfitrion}', ${id_imagen},'${tematica}', '${direccion}')`
        );
        res.status(200).json(`Se REGISTRO el evento ${titulo}`);
        break
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Metodo ${method} Invalido`)
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message)
  }
} 


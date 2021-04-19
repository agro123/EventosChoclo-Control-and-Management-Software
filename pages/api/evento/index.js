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
        direccion,
      aforo},
    } = req

    switch (method) {
      case 'GET':
        const evento = await pool.query('select * from evento natural join imagenes');
        res.status(200).json(evento.rows);
        break
      case 'POST':
        await pool.query(
          `INSERT INTO evento (titulo, fecha_inicial, fecha_final, num_boletas, descrip,
            lugar, anfitrion, id_imagen, tematica, direccion, aforo)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`, 
            [
              titulo,
              fecha_inicial,
              fecha_final,
              num_boletas,
              descripcion,
              lugar,
              anfitrion,
              id_imagen,
              tematica,
              direccion,
              aforo]
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


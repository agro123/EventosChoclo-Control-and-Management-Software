import pool from "../../../lib/bd";
import nextConnect from 'next-connect'
const multer = require('multer');
const fs = require('fs');

const diskStorage = multer.diskStorage({
  destination: './public/imagenes',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
})

const fileUpLoad = multer({
  storage: diskStorage,
})


const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `¡Lo siento, sucedió algo! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Metodo '${req.method}' no valido` });
  },
});

apiRoute.get(async (req, res) => {
  const evento = await pool.query('SELECT * FROM evento');
  res.status(200).json(evento.rows);
})

apiRoute.use(fileUpLoad.single('image'));

apiRoute.post(async(req, res) => {
  const {
    method,
    file,
    body: { titulo,
      fecha_inicial,
      fecha_final,
      num_boletas,
      descripcion,
      lugar,
      anfitrion,
      tematica },
  } = req

  
  const nom_imagen = file.originalname;
  const tipo = file.mimetype;
  const datos = fs.readFileSync( `./public/imagenes/${file.filename}`)
  console.log(file, nom_imagen, tipo, datos)
  await pool.query(
    `INSERT INTO hola (titulo, fecha_inicial, fecha_final, num_boletas, descripcion,
      lugar, anfitrion, nom_imagen, tipo, datos, tematica)
      VALUES('${titulo}', '${fecha_inicial}', '${fecha_final}', ${num_boletas}, '${descripcion}',
        '${lugar}', '${anfitrion}', '${nom_imagen}', '${tipo}', ${datos}, '${tematica}')`
  );
  res.status(200).json('hiciste un post');

});


export default apiRoute;


export const config = {
  api: {
    bodyParser: false,
  },
};

/*
export default async (req, res,   ) => {
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
        nom_imagen,
        tipo,
        datos,
        tematica},
    } = req

    switch (method) {
      case 'GET':
        const evento = await pool.query('SELECT * FROM evento');
        res.status(200).json(evento.rows);
        break
      case 'POST':
        console.log(fileUpLoad)
        fileUpLoad.single('image')(req, {}, err => {
          res.send(req.file);
          console.log(req.file);});
        console.log(fileUpLoad)
        await pool.query(
          `INSERT INTO hola (titulo, fecha_inicial, fecha_final, num_boletas, descripcion,
            lugar, anfitrion, nom_imagen, tipo, datos, tematica)
            VALUES('${titulo}', '${fecha_inicial}', '${fecha_final}', ${num_boletas}, '${descripcion}',
              '${lugar}', '${anfitrion}', '${nom_imagen}', '${tipo}', ${datos}, '${tematica}')`
        );
        res.status(200).json('hiciste un post');
        break
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Metodo ${method} Invalido`)
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message)
  }
} */


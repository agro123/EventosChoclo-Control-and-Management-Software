import pool from "../../../lib/bd";
import nextConnect from 'next-connect'
const multer = require('multer');
const fs = require('fs');

const diskStorage = multer.diskStorage({
  destination: './imagenes',
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
  const evento = await pool.query('SELECT * FROM imagenes');
  res.status(200).json(evento.rows);
})

apiRoute.use(fileUpLoad.single('image'));

apiRoute.post(async(req, res) => {
  const {file } = req

  const nom_imagen = file.originalname;
  const tipo = file.mimetype;
  const datos = fs.readFileSync( `./public/imagenes/${file.filename}`);
  console.log(datos)
  const response = await pool.query(
    `INSERT INTO imagenes (nom_imagen, tipo, datos)
      VALUES($1, $2, $3) returning id_imagen `,[nom_imagen, tipo, datos]
  );
  res.status(200).json(response.rows[0]);

});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};

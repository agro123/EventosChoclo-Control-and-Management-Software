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
  const {id} = req.query
  const evento = await pool.query(`SELECT * FROM imagenes WHERE id_imagen = ${id}`);
  res.status(200).json(evento.rows);
})

apiRoute.use(fileUpLoad.single('image'));

apiRoute.put(async(req, res) => {
  const {file, query: {id}} = req

  const nom_imagen = file.originalname;
  const tipo = file.mimetype;
  const datos = fs.readFileSync( `./public/imagenes/${file.filename}`);
  await pool.query(
    `UPDATE imagenes SET nom_imagen = $1, tipo = $2, datos = $3 WHERE id_imagen = $4`,
    [nom_imagen, tipo, datos, id]
  );
  res.status(200).json('Imagen Actualizada');

});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};

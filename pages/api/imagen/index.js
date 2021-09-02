import pool from "../../../lib/bd";
import nextConnect from "next-connect";
const multer = require("multer");
const fs = require("fs");

const diskStorage = multer.diskStorage({
  destination: "./public/imagenes",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});



const fileUpLoad = multer({
  storage: diskStorage,
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `¡Lo siento, sucedió algo! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Metodo '${req.method}' no valido` });
  },
});

apiRoute.use(fileUpLoad.single("image"));

apiRoute.get(async (req, res) => {
  const cliente = await pool.connect();
  const evento = await cliente.query("SELECT * FROM imagenes");
  res.status(200).json(evento.rows);
  cliente.release();
});

apiRoute.post(async (req, res) => {
  const cliente = await pool.connect();
  const { file } = req;
  
  const url_imagen = `public/imagenes/${file.filename}`;
  const nom_imagen = file.originalname;
  const tipo_imagen = file.mimetype;
  
  const response = await cliente.query(
    `INSERT INTO imagenes (nom_imagen, tipo_imagen, url_imagen)
      VALUES($1, $2, $3) returning id_imagen`,
    [nom_imagen, tipo_imagen, url_imagen]
  );
  res.status(200).json(response.rows[0]);
  cliente.release();
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};

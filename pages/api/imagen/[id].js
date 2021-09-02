import pool from "../../../lib/bd";
import nextConnect from "next-connect";
const multer = require("multer");
const fs = require("fs");

const diskStorage = multer.diskStorage({
  destination: "./imagenes",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const cliente = await pool.connect();

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

apiRoute.get(async (req, res) => {
  const { id } = req.query;
  const evento = await cliente.query(
    `SELECT * FROM imagenes WHERE id_imagen = ${id}`
  );
  res.status(200).json(evento.rows);
  cliente.release();
});

apiRoute.use(fileUpLoad.single("image"));

apiRoute.put(async (req, res) => {
  const {
    file,
    query: { id },
  } = req;

  const url_imagen = `public/imagenes/${file.filename}`;
  const nom_imagen = file.originalname;
  const tipo_imagen = file.mimetype;
  const response = await cliente.query(
    `UPDATE imagenes SET nom_imagen = $1, tipo_imagen = $2, url_imagen = $3 WHERE id_imagen = $4
    returning id_imagen, url_imagen, (
      select url_imagen from imagenes WHERE id_imagen = $4
    ) as old_url`,
    [nom_imagen, tipo_imagen, url_imagen, id]
  );

  const old_url = response.rows[0].old_url;

  if (old_url) {
    try {
      fs.unlinkSync(`./${old_url}`);
      console.log("File removed");
    } catch (err) {
      console.error("error al eliminar el archivo.", err);
    }
  }
  res.status(200).json("Imagen Actualizada");
  cliente.release();
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};

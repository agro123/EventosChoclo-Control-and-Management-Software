import  keys   from "../../lib/keys/keys.js"
const password = keys.Crypto;
const Crypto = require("crypto");
const algoritmo = "aes-192-cbc";


export const Cipher = {
    encriptar: function (contra) {
      try {
        const iv = Crypto.randomBytes(8).toString("hex");
        const cipher = Crypto.createCipheriv(algoritmo, password, iv);
        cipher.update(contra, "utf8", "hex");
        const contraCipher = cipher.final("hex");
        return iv + contraCipher;
      } catch (err) {
        console.error(err);
      }
    },
    desencriptar: function (hex) {
      try {
        const iv = hex.slice(0, 16);
        const contraCipher = hex.slice(16);
        let decipher = Crypto.createDecipheriv(algoritmo, password, iv);
        decipher.update(contraCipher, "hex", "utf8");
        return decipher.final("utf8");
      } catch (err) {
        console.error(err);
      }
    },
  };
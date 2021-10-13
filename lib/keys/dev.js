module.exports = {
  posgresqlURI: process.env.DATABASE_URL ||
    "postgres://dxeiwewoxgnmbk:550e40c2a3eea4c6450ccfc136652be64caa42b9676e3a53b5369b7481c53484@ec2-3-211-37-117.compute-1.amazonaws.com:5432/dc4e2l1dkls079",
    cloudinaryURL: process.env.IMAGEN_URL || 'https://api.cloudinary.com/v1_1/do1dejajk/image/upload',
    uploadPreset: process.env.UPLOAD_PRE || "mq7midar",
    crypto: process.env.CRYPTO || 'nIJXz4T8TtQO8wdmVNjzqQhc',
};

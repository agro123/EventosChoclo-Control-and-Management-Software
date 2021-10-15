export default function (req, res) {

    const { id_compra, email } = req.body;
    console.log(email);
    const URL = `https://eventoschoclo.herokuapp.com/boleta/${id_compra}`
    

    const QR = `http://api.qrserver.com/v1/create-qr-code/?data=${URL}&size=200x200&bgcolor=fffff`;

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'eventoschoclo@gmail.com',
            pass: 'dev02468',
        },
        secure: true,
    });

    const mailData = {
        from: '"Eventos Choclo" <eventoschoclo@gmail', // sender address
        to: `${email}`, // list of receivers
        subject: "Su boleta adquirida en Eventos Choclo", // Subject line
        text: `${id_compra}`, // plain text body
        html: `<h3> De parte de <b>Eventos Choclo</b> deseamos que pase un buen tiempo en este evento  </h3>
                <br>
                <h4>Escanee el siguiente código QR para acceder a la información de su boleta</h4>
                <img src=${QR} ></img>`, // html body
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    })

    console.log(req.body)
    res.send('success')
}
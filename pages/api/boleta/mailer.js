export default function (req, res) {

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
        from: '"Fred Foo 👻" <eventoschoclo@gmail', // sender address
        to: "leonardo.bolanos@correounivalle.edu.co", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
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
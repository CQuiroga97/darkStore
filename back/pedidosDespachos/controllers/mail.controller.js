let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'apolodigitalsolutions@gmail.com',
    pass: 'keiwyfodysygjcja'
  }
});

exports.enviarCorreo = (mailOptions, res)=>{
    mailOptions["from"] = "apolodigitalsolutions@gmail.com";
    console.log(mailOptions)
    setTimeout(()=>{
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Correo enviado a ' + mailOptions.to);
        }
        res.status(200).send();
        });
    }, 2000)
}
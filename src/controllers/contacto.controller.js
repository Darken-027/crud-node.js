const nodemailer = require("nodemailer");

const index = (req, res) => {
    res.render("conctacto");
};

const submit = async(req, res) => {
    console.log(req.body); 

    const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
    },
});


try {
    const info = await transporter.sendMail({
    from: `"${req.body.nombre}" <${req.body.correo}>`,
    to: "bar@example.com, baz@example.com",
    subject: "Formulario de contacto ✔",
    text: req.body.mensaje, // plain‑text body
    html: `<pre>${req.body.mensaje}</pre>`, // HTML body
    });
    console.info(info); 
} catch (error) {
    console.error(error);
}

    res.send("Enviendo");
};

module.exports = {
    index,
    submit,
}
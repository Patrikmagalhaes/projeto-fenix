const nodeMailer = require("nodemailer")
const mailerConfig = require('./emailConfig')


    const trasnporter = nodeMailer.createTransport(mailerConfig)

    async function enviaEmail(destinatario, assunto, conteudo) {
        try {

            const info = await trasnporter.sendMail({
                from: "patrikmagalhaes@icloud.com",
                destinatario,
                assunto,
                conteudo
            })

            console.log("Email Enviado", info.messageId)
        } catch (error) {
            console.log("deu merda", error)
        }
    }

    enviaEmail('info@ethereal.email', "teste de email", "eeeeeeeuu amo a sua main")

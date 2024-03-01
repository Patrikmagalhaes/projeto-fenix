const btn = document.getElementById('btn')
const nodemailer = require("nodemailer");

btn.addEventListener("click", () => {

    document.addEventListener("DOMContentLoaded", function () {


        const nodemailer = require('nodemailer')
        const mailerConfig = require('./emailConfig')
    
        const transporter = nodemailer.createTransport(mailerConfig)
    
        async function enviarEmail(to, subject, text) {
    
            try {
                const info = await transporter.sendMail({
                    from: 'patrikmagalhaes@icloud.com',
                    to,
                    subject,
                    text
                })
    
                console.log("mensagemail enviado", info.messageId)
                console.log("link da menssagem", getTestMessageUrl(info))
            } catch (error) {
                console.error("erro", error)
            }
    
        }
    
    })
    
    
    

})
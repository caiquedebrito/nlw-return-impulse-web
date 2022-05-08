import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0820b3c78d65f1",
      pass: "62e4c80adee63d"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData){
        await transport.sendMail({
            from: "Equipe Feedget <teste@feedget.com>",
            to: 'Caique De Brito <caiquedebritoo@gmail.com',
            subject,
            html: body
        })
    }
}
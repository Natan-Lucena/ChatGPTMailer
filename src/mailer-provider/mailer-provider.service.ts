import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerProviderService {
  async sendEmail({ email, body }) {
    const user = process.env.EMAIL;
    const pass = process.env.PASSWORD;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });
    await transporter
      .sendMail({
        from: 'Seu Admirador Secreto',
        to: email,
        subject: 'Declaração de amor',
        html: body,
        text: 'Love u <3',
      })
      .then(() => console.log('Email enviado com sucesso'))
      .catch((error) => console.log('Algo deu errado:', error));
  }
}

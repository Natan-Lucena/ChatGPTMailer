import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MailerGptService } from 'src/mailer-gpt/mailer-gpt.service';
import { MailerProviderService } from 'src/mailer-provider/mailer-provider.service';
import 'dotenv/config';

@Injectable()
export class CronServiceService {
  constructor(
    private mailerGPT: MailerGptService,
    private mailerProvider: MailerProviderService,
  ) {}
  @Cron('10 00 9 * * *')
  async execute() {
    const prompt =
      ' Me gere um texto curto com no maximo 600 caracteres , que seja uma demonstração de amor para Maria Alice, voce pode chama-la de Alice, Maria Alice , Estrelinha ou Alice Alves Lucena(Seja aleatorio nessas opções), o texto deve resaltar sua beleza unica ou sua inteligencia. Algumas relações que podem ser feitas no texto: citar o fato de dela ser a arquiteta dos meus sonhos, falar que quero passar a vida com ela, citar um poema (ou criar)  que remeta as qualidades dela. Mas sempre encerre a declaração com (do seu eterno amor)';

    const message = await this.mailerGPT.generateResponse(prompt);
    await this.mailerProvider.sendEmail({
      email: process.env.CLIENT_EMAIL,
      body: message,
    });
  }
}

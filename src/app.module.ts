import { Module } from '@nestjs/common';
import { MailerGptService } from './mailer-gpt/mailer-gpt.service';

@Module({
  imports: [],
  controllers: [],
  providers: [MailerGptService],
})
export class AppModule {}

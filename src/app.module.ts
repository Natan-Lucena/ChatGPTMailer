import { Module } from '@nestjs/common';
import { MailerGptService } from './mailer-gpt/mailer-gpt.service';
import { MailerProviderService } from './mailer-provider/mailer-provider.service';

@Module({
  imports: [],
  controllers: [],
  providers: [MailerGptService, MailerProviderService],
})
export class AppModule {}

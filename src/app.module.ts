import { Module } from '@nestjs/common';
import { MailerGptService } from './mailer-gpt/mailer-gpt.service';
import { MailerProviderService } from './mailer-provider/mailer-provider.service';
import { CronServiceService } from './cron-service/cron-service.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [],
  providers: [MailerGptService, MailerProviderService, CronServiceService],
})
export class AppModule {}

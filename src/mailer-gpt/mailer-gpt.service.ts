import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import OpenAI from 'openai';

@Injectable()
export class MailerGptService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({ apiKey: process.env.API_KEY });
  }

  async generateResponse(prompt: string): Promise<string> {
    const gptResponse = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      messages: [{ role: 'system', content: prompt }],
      max_tokens: 300,
    });

    return gptResponse.choices[0].message.content;
  }
}

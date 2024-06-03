import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static('public')); // Подставьте путь к вашей папке со статическими файлами
  await app.listen(3000);
}
bootstrap();

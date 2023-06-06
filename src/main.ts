import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:4200', 'http://test.xpnda.de'], // Setze hier die Ursprungsdomäne deiner Anwendung
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Erlaubte HTTP-Methoden
  });

  await app.listen(3000);
}
bootstrap();

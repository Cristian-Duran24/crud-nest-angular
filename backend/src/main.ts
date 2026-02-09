import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // 2. (Recomendado) Activar validaciones globales para tus DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina campos extra que no estén en el DTO
    forbidNonWhitelisted: true, // Lanza error si envían basura extra
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

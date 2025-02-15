import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Преобразует входящие данные в экземпляры DTO
      whitelist: true, // Удаляет свойства, которые не указаны в DTO
      forbidNonWhitelisted: true, // Выбрасывает ошибку, если есть неразрешенные свойства
    }),
  );
  await app.listen(process.env.PORT ?? 10001);
}
bootstrap()
  .then(() => console.log('Server started'))
  .catch((e) => console.error(e));

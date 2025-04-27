import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT');

  app.enableCors({
    origin: 'http://localhost:5500',
    credentials: true,
  });

<<<<<<< HEAD
  // Adding base url to the app
  app.setGlobalPrefix('api');

=======
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
  await app.listen(PORT ?? 8000, () => {
    console.log(`The server is running on port ${PORT ?? 8000} `);
  });
}
bootstrap();

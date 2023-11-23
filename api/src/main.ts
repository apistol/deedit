import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3001', 'http://example.com', 'https://anotherdomain.com'],
    credentials: true

  }); // Enables CORS for all origins
  await app.listen(3000);
}
export default bootstrap();
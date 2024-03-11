import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: ['http://localhost:3001', 'https://deedit-xi.vercel.app/'],
    credentials: true,
  }) // Enables CORS for all origins

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000)
}

export default bootstrap()

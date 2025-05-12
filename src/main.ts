import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
    app.enableCors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  });
  await app.listen(process.env.PORT , "0.0.0.0");
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
}
bootstrap();

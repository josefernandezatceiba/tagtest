import { NestFactory } from '@nestjs/core';
import { OneappModule } from './oneapp.module';

async function bootstrap() {
  const app = await NestFactory.create(OneappModule);
  await app.listen(3000);
}
bootstrap();

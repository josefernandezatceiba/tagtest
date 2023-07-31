import { NestFactory } from '@nestjs/core';
import { TwoappModule } from './twoapp.module';

async function bootstrap() {
  const app = await NestFactory.create(TwoappModule);
  await app.listen(3000);
}
bootstrap();

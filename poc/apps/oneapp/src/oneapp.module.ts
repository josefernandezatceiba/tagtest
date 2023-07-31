import { Module } from '@nestjs/common';
import { OneappController } from './oneapp.controller';
import { OneappService } from './oneapp.service';

@Module({
  imports: [],
  controllers: [OneappController],
  providers: [OneappService],
})
export class OneappModule {}

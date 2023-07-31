import { Module } from '@nestjs/common';
import { TwoappController } from './twoapp.controller';
import { TwoappService } from './twoapp.service';

@Module({
  imports: [],
  controllers: [TwoappController],
  providers: [TwoappService],
})
export class TwoappModule {}

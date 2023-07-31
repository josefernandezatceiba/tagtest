import { Controller, Get } from '@nestjs/common';
import { TwoappService } from './twoapp.service';

@Controller()
export class TwoappController {
  constructor(private readonly twoappService: TwoappService) {}

  @Get()
  getHello(): string {
    return this.twoappService.getHello();
  }
}

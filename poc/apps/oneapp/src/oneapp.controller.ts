import { Controller, Get } from '@nestjs/common';
import { OneappService } from './oneapp.service';

@Controller()
export class OneappController {
  constructor(private readonly oneappService: OneappService) {}

  @Get()
  getHello(): string {
    return this.oneappService.getHello();
  }
}

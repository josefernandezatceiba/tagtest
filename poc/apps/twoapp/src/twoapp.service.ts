import { Injectable } from '@nestjs/common';

@Injectable()
export class TwoappService {
  getHello(): string {
    return 'Hello World!';
  }
}

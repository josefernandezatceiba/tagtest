import { Injectable } from '@nestjs/common';

@Injectable()
export class OneappService {
  getHello(): string {
    return 'Hello World!';
  }
}

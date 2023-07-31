import { Test, TestingModule } from '@nestjs/testing';
import { OneappController } from './oneapp.controller';
import { OneappService } from './oneapp.service';

describe('OneappController', () => {
  let oneappController: OneappController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OneappController],
      providers: [OneappService],
    }).compile();

    oneappController = app.get<OneappController>(OneappController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(oneappController.getHello()).toBe('Hello World!');
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TwoappController } from './twoapp.controller';
import { TwoappService } from './twoapp.service';

describe('TwoappController', () => {
  let twoappController: TwoappController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TwoappController],
      providers: [TwoappService],
    }).compile();

    twoappController = app.get<TwoappController>(TwoappController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(twoappController.getHello()).toBe('Hello World!');
    });
  });
});

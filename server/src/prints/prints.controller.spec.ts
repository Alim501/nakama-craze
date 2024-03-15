import { Test, TestingModule } from '@nestjs/testing';
import { PrintsController } from './prints.controller';

describe('PrintsController', () => {
  let controller: PrintsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrintsController],
    }).compile();

    controller = module.get<PrintsController>(PrintsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

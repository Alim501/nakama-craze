import { Test, TestingModule } from '@nestjs/testing';
import { SizesImgController } from './sizes_img.controller';

describe('SizesImgController', () => {
  let controller: SizesImgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SizesImgController],
    }).compile();

    controller = module.get<SizesImgController>(SizesImgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

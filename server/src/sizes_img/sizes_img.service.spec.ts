import { Test, TestingModule } from '@nestjs/testing';
import { SizesImgService } from './sizes_img.service';

describe('SizesImgService', () => {
  let service: SizesImgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SizesImgService],
    }).compile();

    service = module.get<SizesImgService>(SizesImgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

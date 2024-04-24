import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Size } from './sizes.model';
import { CreateSizeDto } from './dto/create-size.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class SizesService {
  constructor(
    @InjectModel(Size) private sizeRepository: typeof Size,
    private fileService: FilesService,
  ) {}

  async createSize(dto: CreateSizeDto, img: any) {
    const fileName = await this.fileService.createFile(img, 'Sizes');
    return this.sizeRepository.create({ ...dto, img: fileName });
  }

  async getAllSizes() {
    return this.sizeRepository.findAll();
  }

  async getOneSize(id: number): Promise<Size> {
    return this.sizeRepository.findOne({ where: { id } });
  }
  async updateSize(params: {
    id: number;
    dto: CreateSizeDto;
    img: any;}): Promise<Size> {
    let { dto, img, id } = params;
    if (!img.img) {
      const fileName = await this.fileService.createFile(img, 'Anime');
      dto = { ...dto, img: fileName };
    }
    await this.sizeRepository.update(dto, { where: { id } });
    return this.sizeRepository.findOne({ where: { id } });
  }
  async deleteSize(id: number): Promise<number> {
    return this.sizeRepository.destroy({
      where: { id },
    });
  }
}

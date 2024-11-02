import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Size } from './sizes.model';
import { CreateSizeDto } from './dto/create-size.dto';
import { FilesService } from 'src/files/files.service';
import { Category } from 'src/categories/categories.model';

@Injectable()
export class SizesService {
  constructor(
    @InjectModel(Size) private sizeRepository: typeof Size,
    private fileService: FilesService,
  ) {}

  async createSize(dto: CreateSizeDto): Promise<Size> {
    return this.sizeRepository.create(dto);
  }

  async getAllSizes(): Promise<Size[]> {
    return this.sizeRepository.findAll({
      include: { model: Category, attributes: ['title'] },
    });
  }

  async getOneSize(id: number): Promise<Size> {
    return this.sizeRepository.findOne({ where: { id } });
  }
  async updateSize(id: number, dto: CreateSizeDto): Promise<Size> {
    await this.sizeRepository.update(dto, { where: { id } });
    return this.sizeRepository.findOne({ where: { id } });
  }

  async deleteSize(id: number): Promise<number> {
    return this.sizeRepository.destroy({
      where: { id },
    });
  }
}

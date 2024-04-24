import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Color } from './colors.model';
import { CreateColorDto } from './dto/create-color.dto';

@Injectable()
export class ColorsService {
  constructor(@InjectModel(Color) private colorRepository: typeof Color) {}

  async createColor(dto: CreateColorDto) {
    const color = await this.colorRepository.create(dto);
    return color;
  }

  async getAllColors() {
    const colors = await this.colorRepository.findAll();
    return colors;
  }

  async getOneColor(id: number): Promise<Color> {
    return this.colorRepository.findOne({ where: { id } });
  }
  async updateColor(id: number, dto: CreateColorDto): Promise<Color> {
    await this.colorRepository.update(dto, { where: { id } });
    return this.colorRepository.findOne({ where: { id } });
  }
  async deleteColor(id: number): Promise<number> {
    return this.colorRepository.destroy({
      where: { id },
    });
  }
}

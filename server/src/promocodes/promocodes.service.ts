import { Injectable } from '@nestjs/common';
import { Promocode } from './promocodes.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePromocodeDto } from './dto/create-promocode.dto';

@Injectable()
export class PromocodesService {
  constructor(
    @InjectModel(Promocode) private promocodeRepository: typeof Promocode,
  ) {}

  async createPromocode(dto: CreatePromocodeDto) {
    return this.promocodeRepository.create(dto);
  }

  async getAllPromocodes() {
    return this.promocodeRepository.findAll();
  }
  
  async getPromocodeById(id: number): Promise<Promocode> {
    return this.promocodeRepository.findOne({ where: { id } });
  }
  async getPromocodeByCode(code: string): Promise<Promocode> {
    return this.promocodeRepository.findOne({ where: { code } });
  }
  async updatePromocode(id: number, dto: CreatePromocodeDto): Promise<Promocode> {
    await this.promocodeRepository.update(dto, { where: { id } });
    return this.promocodeRepository.findOne({ where: { id } });
  }
  async deletePromocode(id: number): Promise<number> {
    return this.promocodeRepository.destroy({
      where: { id },
    });
  }
}

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
  
}

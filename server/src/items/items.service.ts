import { Injectable } from '@nestjs/common';
import { Item } from './items.model';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreateItemDto } from './dto/create-item.dto';
import { dot } from 'node:test/reporters';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item) private itemRepository: typeof Item) {}

  async findOrCreateItem(dto: CreateItemDto): Promise<Item> {
    const { product_id, color_id, size_id } = dto;
    const [item, created] = await this.itemRepository.findOrCreate({
      where: { product_id, color_id, size_id },
      defaults: dto,
    });

    return item;
  }

  async getAllItems() {
    return this.itemRepository.findAll();
  }
}

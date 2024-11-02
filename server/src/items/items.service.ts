import { Injectable } from '@nestjs/common';
import { Item } from './items.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item) private itemRepository: typeof Item) {}

  async findOrCreateItem(dto: CreateItemDto): Promise<{
    id: number;
    product_id: number;
    color_id: number;
    size_id: number;
  }> {
    const { product_id, color_id, size_id } = dto;

    const [item] = await this.itemRepository.findOrCreate({
      where: { product_id, color_id, size_id },
      include: [
        {
          association: 'color',
          attributes: ['title'],
        },
        {
          association: 'product',
          attributes: ['title', 'icon', 'price'],
        },
        {
          association: 'size',
          attributes: ['code'],
        },
      ],
      defaults: dto,
    });

    return item.get({ plain: true });
  }

  async getAllItems(): Promise<Item[]> {
    const items = await this.itemRepository.findAll();
    return items;
  }

  async findItemById(item_id: number): Promise<Item> {
    const item = await this.itemRepository.findOne({
      where: { id: item_id },
      include: [
        {
          association: 'color',
          attributes: ['title'],
        },
        {
          association: 'product',
          attributes: ['title', 'icon', 'price'],
        },
        {
          association: 'size',
          attributes: ['code'],
        },
      ],
    });

    if (!item) {
      throw new Error('Item not found');
    }

    return item;
  }
}

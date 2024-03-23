import { Injectable } from '@nestjs/common';
import { Item } from './items.model';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreateItemDto } from './dto/create-item.dto';
import { dot } from 'node:test/reporters';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item) private itemRepository: typeof Item) {}

  async findOrCreateItem(product_id: number,size_id:number,color_id:number) {
    const basket = await this.itemRepository.findOrCreate({where:{ product_id: product_id }});
    return basket;
  }

  async createItem(dto:CreateItemDto){
    return this.itemRepository.create(dto);
  }

  async getAllItems(){
    return this.itemRepository.findAll();
  }


  
}

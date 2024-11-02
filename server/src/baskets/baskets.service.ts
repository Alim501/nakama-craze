import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './basket.model';
import { ItemsService } from 'src/items/items.service';
import { Basket_item } from './basket_item.model';
import { CreateItemDto } from 'src/items/dto/create-item.dto';
import { Item } from 'src/items/items.model';

@Injectable()
export class BasketsService {
  constructor(
    @InjectModel(Basket) private basketRepository: typeof Basket,
    @InjectModel(Basket_item) private basket_itemRepository: typeof Basket_item,
    private itemService: ItemsService,
  ) {}

  async createBasket(user_id: number) {
    return this.basketRepository.create({ user_id: user_id });
  }

  async getBasketByUser(
    user_id: number,
  ): Promise<{ item: Item; quantity: number }[]> {
    const basket = await this.basketRepository.findOne({
      where: { user_id: user_id },
    });

    if (!basket) {
      return [];
    }

    const basket_items = await this.basket_itemRepository.findAll({
      where: { basket_id: basket.id },
    });

    const items = await Promise.all(
      basket_items.map(async (basket_item) => {
        const itemDetails = await this.itemService.findItemById(
          basket_item.item_id,
        );
        return {
          item: itemDetails,
          quantity: basket_item.quantity,
          basket_item_id: basket_item.id,
        };
      }),
    );

    return items;
  }

  async addItemToBasket(
    itemDto: CreateItemDto,
    user_id: number,
    quantity: number,
  ) {
    const basket = await this.basketRepository.findOne({
      where: { user_id: user_id },
    });
    const item = await this.itemService.findOrCreateItem(itemDto);
    const basket_itemDto = {
      quantity: quantity,
      basket_id: basket.id,
      item_id: item.id,
    };
    const basket_item = await this.basket_itemRepository.create(basket_itemDto);
    return {
      ...item,
      quantity: basket_item.quantity,
      basket_item_id: basket_item.id,
    };
  }

  async editBasketItemQuantity(
    item_id: number,
    user_id: number,
    quantity: number,
  ): Promise<number> {
    const basket = await this.basketRepository.findOne({
      where: { user_id: user_id },
    });

    this.basket_itemRepository.update(
      { quantity: quantity },
      {
        where: {
          basket_id: basket.id,
          item_id: item_id,
        },
      },
    );
    return quantity;
  }

  async deleteBasketItem(
    basket_item_id: number,
    user_id: number,
  ): Promise<number> {
    const basket = await this.basketRepository.findOne({
      where: { user_id: user_id },
    });
    return this.basket_itemRepository.destroy({
      where: { id: basket_item_id, basket_id: basket.id },
    });
  }
}

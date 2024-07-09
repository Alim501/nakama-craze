import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './orders.model';
import { Order_item } from './order_item.model';
import { User } from 'src/users/users.model';
import { Item } from 'src/items/items.model';
import { Promocode } from 'src/promocodes/promocodes.model';
import { Color } from 'src/colors/colors.model';
import { Size } from 'src/sizes/sizes.model';
import { Product } from 'src/products/products.model';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private orderRepository: typeof Order) {}

  async getOrdersByUser(user_id: number) {
    return this.orderRepository.findAll({ where: { user_id: user_id } });
  }

  async getAllOrders() {
    return this.orderRepository.findAll({
      include: [
        {
          model: Item,
          include: [
            {
              model: Color,
              attributes: ['title'],
            },
            {
              model: Size,
              attributes: ['title'],
            },
            {
              model: Product,
              attributes: ['title'],
            },
          ],
        },
        {
          model: User,
          attributes: ['email'],
        },
        {
          model: Promocode,
          attributes: ['code'],
        },
      ],
    });
  }

  async getOrderByID(id: number) {
    const order = await this.orderRepository.findOne({ where: { id } });
    const items = order.items;
    return { order, items };
  }
}

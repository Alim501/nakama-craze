import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './orders.model';
import { Order_item } from './order_item.model';
import { Item } from 'src/items/items.model';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order) private orderRepository: typeof Order,
    @InjectModel(Order_item) private orderitemRepository: typeof Order_item,
    @InjectModel(Item) private itemRepository: typeof Item) {}

    async getOrdersByUser(user_id: number) {
        return this.orderRepository.findAll({where:{ user_id: user_id }});
    }

    
    async getOrderByID(order_id: number) {
        const order_item= await this.orderitemRepository.findOne({where:{ order_id: order_id }});
        const items=this.itemRepository.findAll({where:{id:order_item.id}})
        const order=this.orderRepository.findOne({where:{id:order_id}});
        return {order,items}
    }
}


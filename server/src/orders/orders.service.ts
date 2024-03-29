import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './orders.model';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order) private orderRepository: typeof Order,) {}

    async getOrdersByUser(user_id: number) {
        return this.orderRepository.findAll({where:{ user_id: user_id }});
    }

    
    async getOrderByID(id: number) {
        const order= await this.orderRepository.findOne({where:{id}});
        const items=order.items
        return {order , items};
    }
}


import { Module, forwardRef } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './orders.model';
import { Order_item } from './order_item.model';
import { Item } from 'src/items/items.model';
import { Promocode } from 'src/promocodes/promocodes.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [OrdersController],
  imports:[
    forwardRef(()=>AuthModule),
    SequelizeModule.forFeature([Order,Order_item,Item,Promocode]),
  ],
  providers: [OrdersService]
})
export class OrdersModule {}

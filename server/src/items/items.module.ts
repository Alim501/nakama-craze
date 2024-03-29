import { Module, forwardRef } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './items.model';
import { Basket } from 'src/baskets/basket.model';
import { Basket_item } from 'src/baskets/basket_item.model';
import { Order } from 'src/orders/orders.model';
import { Order_item } from 'src/orders/order_item.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [ItemsService],
  imports:[
    forwardRef(()=> AuthModule),
    SequelizeModule.forFeature([Item,Basket,Basket_item,Order,Order_item]),
  ],
  controllers: [ItemsController],
})
export class ItemsModule {}

import { Module, forwardRef } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketsController } from './baskets.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Basket } from './basket.model';
import { Basket_item } from './basket_item.model';
import { Item } from 'src/items/items.model';
import { User } from 'src/users/users.model';
import { AuthModule } from 'src/auth/auth.module';
import { ItemsModule } from 'src/items/items.module';

@Module({
  providers: [BasketsService],
  imports:[
    ItemsModule,
    SequelizeModule.forFeature([Basket,Basket_item,Item,User]),
    forwardRef(()=> AuthModule),
  ],
  controllers: [BasketsController],
  exports:[BasketsService]
})
export class BasketsModule {}

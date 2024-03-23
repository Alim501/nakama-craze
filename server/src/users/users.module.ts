import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { AuthModule } from 'src/auth/auth.module';
import { Basket } from 'src/baskets/basket.model';
import { Order } from 'src/orders/orders.model';
import { BasketsService } from 'src/baskets/baskets.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[
    SequelizeModule.forFeature([User,Basket,Order]),
    forwardRef(()=> AuthModule),
  ],
  exports:[
    UsersService,
  ]
})
export class UsersModule {}

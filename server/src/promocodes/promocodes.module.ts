import { Module } from '@nestjs/common';
import { PromocodesController } from './promocodes.controller';
import { PromocodesService } from './promocodes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Promocode } from './promocodes.model';
import { Order } from 'src/orders/orders.model';

@Module({
  controllers: [PromocodesController],
  imports:[
    SequelizeModule.forFeature([Promocode,Order]),
  ],
  providers: [PromocodesService]
})
export class PromocodesModule {}

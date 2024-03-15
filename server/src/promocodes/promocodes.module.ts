import { Module } from '@nestjs/common';
import { PromocodesController } from './promocodes.controller';
import { PromocodesService } from './promocodes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Promocode } from './promocodes.model';

@Module({
  controllers: [PromocodesController],
  imports:[
    SequelizeModule.forFeature([Promocode]),
  ],
  providers: [PromocodesService]
})
export class PromocodesModule {}

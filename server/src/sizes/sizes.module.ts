import { Module } from '@nestjs/common';
import { SizesService } from './sizes.service';
import { SizesController } from './sizes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Size } from './sizes.model';

@Module({
  providers: [SizesService],
  imports:[
    SequelizeModule.forFeature([Size]),
  ],
  controllers: [SizesController]
})
export class SizesModule {}

import { Module } from '@nestjs/common';
import { SizesService } from './sizes.service';
import { SizesController } from './sizes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Size } from './sizes.model';
import { Item } from 'src/items/items.model';

@Module({
  providers: [SizesService],
  imports:[
    SequelizeModule.forFeature([Size,Item]),
  ],
  controllers: [SizesController]
})
export class SizesModule {}

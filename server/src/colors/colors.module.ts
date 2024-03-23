import { Module } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ColorsController } from './colors.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from 'src/products/products.model';
import { Color } from './colors.model';
import { Product_Color } from './product_color.model';
import { Item } from 'src/items/items.model';

@Module({
  providers: [ColorsService],
  imports:[
    SequelizeModule.forFeature([Product,Color,Product_Color,Item]),
  ],
  controllers: [ColorsController]
})
export class ColorsModule {}

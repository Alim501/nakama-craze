import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products.model';
import { Product_Img } from './products_img.model';
import { Category } from 'src/categories/categories.model';
import { Item } from 'src/items/items.model';
import { Color } from 'src/colors/colors.model';
import { Product_Color } from 'src/colors/product_color.model';
import { Anime } from 'src/anime/anime.model';

@Module({
  providers: [ProductsService],
  imports:[
    SequelizeModule.forFeature([Product,Product_Img,Anime,Category,Item,Color,Product_Color]),
  ],
  controllers: [ProductsController]
})
export class ProductsModule {}

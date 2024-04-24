import { Module, forwardRef } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products.model';
import { Product_Img } from './products_img.model';
import { Category } from 'src/categories/categories.model';
import { Item } from 'src/items/items.model';
import { Color } from 'src/colors/colors.model';
import { Anime } from 'src/anime/anime.model';
import { FilesModule } from 'src/files/files.module';
import { AuthModule } from 'src/auth/auth.module';
import { Product_Color } from './product_color.model';

@Module({
  providers: [ProductsService],
  imports:[
    FilesModule,
    forwardRef(()=>AuthModule),
    SequelizeModule.forFeature([Product,Product_Img,Anime,Category,Item,Color,Product_Color]),
  ],
  controllers: [ProductsController]
})
export class ProductsModule {}

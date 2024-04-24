import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { SizesModule } from './sizes/sizes.module';
import { AnimeModule } from './anime/anime.module';
import { ColorsModule } from './colors/colors.module';
import { PromocodesModule } from './promocodes/promocodes.module';
import { BasketsModule } from './baskets/baskets.module';
import { OrdersModule } from './orders/orders.module';
import { ItemsModule } from './items/items.module';
import { Anime } from './anime/anime.model';
import { Basket } from './baskets/basket.model';
import { Basket_item } from './baskets/basket_item.model';
import { Category } from './categories/categories.model';
import { Color } from './colors/colors.model';
import { Item } from './items/items.model';
import { Order } from './orders/orders.model';
import { Order_item } from './orders/order_item.model';
import { Product } from './products/products.model';
import { Product_Img } from './products/products_img.model';
import { Promocode } from './promocodes/promocodes.model';
import { Size } from './sizes/sizes.model';
import { FilesModule } from './files/files.module';
import { Product_Color } from './products/product_color.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath:`.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User,Anime,Basket,Basket_item,Category,Color,Product_Color,Item,Order,Order_item,Product,Product_Img,Promocode,Size],
      autoLoadModels:true
    }),
    UsersModule,
    AuthModule,
    ProductsModule,
    CategoriesModule,
    SizesModule,
    AnimeModule,
    ColorsModule,
    PromocodesModule,
    BasketsModule,
    OrdersModule,
    ItemsModule,
    FilesModule,
  ]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { SizesModule } from './sizes/sizes.module';
import { SizesImgModule } from './sizes_img/sizes_img.module';
import { PrintsModule } from './prints/prints.module';
import { AnimeModule } from './anime/anime.module';
import { ColorsModule } from './colors/colors.module';
import { PromocodesModule } from './promocodes/promocodes.module';

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
      models: [User],
      autoLoadModels:true
    }),
    UsersModule,
    AuthModule,
    ProductsModule,
    CategoriesModule,
    SizesModule,
    SizesImgModule,
    PrintsModule,
    AnimeModule,
    ColorsModule,
    PromocodesModule,
  ]
})
export class AppModule {}

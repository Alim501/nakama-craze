import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products.model';

@Module({
  providers: [ProductsService],
  imports:[
    SequelizeModule.forFeature([Product]),
  ],
  controllers: [ProductsController]
})
export class ProductsModule {}

import { Module, forwardRef } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { Product } from 'src/products/products.model';
import { Size } from 'src/sizes/sizes.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CategoriesController],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([Category, Product, Size]),
  ],
  providers: [CategoriesService],
})
export class CategoriesModule {}

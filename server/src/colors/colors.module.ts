import { Module, forwardRef } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ColorsController } from './colors.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from 'src/products/products.model';
import { Color } from './colors.model';
import { Item } from 'src/items/items.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [ColorsService],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([Product, Color, Item]),
  ],
  controllers: [ColorsController],
})
export class ColorsModule {}

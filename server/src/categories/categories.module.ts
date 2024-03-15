import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './categories.model';

@Module({
  controllers: [CategoriesController],
  imports:[
    SequelizeModule.forFeature([Category]),
  ],
  providers: [CategoriesService]
})
export class CategoriesModule {}

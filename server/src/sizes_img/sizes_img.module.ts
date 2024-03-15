import { Module } from '@nestjs/common';
import { SizesImgController } from './sizes_img.controller';
import { SizesImgService } from './sizes_img.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Size_img } from './sizes_img.model';

@Module({
  controllers: [SizesImgController],
  imports:[
    SequelizeModule.forFeature([Size_img]),
  ],
  providers: [SizesImgService]
})
export class SizesImgModule {}

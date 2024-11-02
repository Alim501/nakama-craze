import { Module } from '@nestjs/common';
import { SizesService } from './sizes.service';
import { SizesController } from './sizes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Size } from './sizes.model';
import { Item } from 'src/items/items.model';
import { AuthModule } from 'src/auth/auth.module';
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [SizesService],
  imports: [FilesModule, AuthModule, SequelizeModule.forFeature([Size, Item])],
  controllers: [SizesController],
})
export class SizesModule {}

import { Module, forwardRef } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeController } from './anime.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Anime } from './anime.model';
import { FilesModule } from 'src/files/files.module';
import { AuthModule } from 'src/auth/auth.module';
import { Product } from 'src/products/products.model';

@Module({
  providers: [AnimeService],
  imports: [
    FilesModule,
    SequelizeModule.forFeature([Anime, Product]),
    forwardRef(() => AuthModule),
  ],
  controllers: [AnimeController],
})
export class AnimeModule {}

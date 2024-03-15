import { Module } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeController } from './anime.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Anime } from './anime.model';

@Module({
  providers: [AnimeService],
  imports:[
    SequelizeModule.forFeature([Anime]),
  ],
  controllers: [AnimeController]
})
export class AnimeModule {}

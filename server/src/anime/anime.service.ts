import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Anime } from './anime.model';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class AnimeService {

    constructor(@InjectModel(Anime) private animeRepository:typeof Anime,
                private fileService:FilesService){}

    async getAllAnime(){
        return this.animeRepository.findAll();
    }

    async createAnime(dto:CreateAnimeDto,img:any){
        const fileName= await this.fileService.createFile(img,"Anime");
        return this.animeRepository.create({...dto,img:fileName})
    }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Anime } from './anime.model';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class AnimeService {
  constructor(
    @InjectModel(Anime) private animeRepository: typeof Anime,
    private fileService: FilesService,
  ) {}

  async getAllAnime(): Promise<Anime[]> {
    return this.animeRepository.findAll();
  }
  async getOneAnime(id: number): Promise<Anime> {
    return this.animeRepository.findOne({ where: { id } });
  }

  async createAnime(dto: CreateAnimeDto, img: any): Promise<Anime> {
    const fileName = await this.fileService.createFile(img, 'Anime');
    return this.animeRepository.create({ ...dto, img: fileName });
  }
  async updateAnime(params: {
    id: number;
    dto: CreateAnimeDto;
    img?: any;
  }): Promise<Anime> {
    // eslint-disable-next-line prefer-const
    let { dto, img, id } = params;
    if (img) {
      const fileName = await this.fileService.createFile(img, 'Anime');
      dto = { ...dto, img: fileName };
    }
    await this.animeRepository.update(dto, {
      where: { id },
    });
    const anime = this.animeRepository.findOne({ where: { id } });
    return anime;
  }

  async deleteAnime(id: number): Promise<number> {
    return this.animeRepository.destroy({
      where: { id },
    });
  }
}

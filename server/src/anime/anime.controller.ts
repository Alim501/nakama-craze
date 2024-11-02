import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Anime } from './anime.model';
import { AnimeService } from './anime.service';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { NUMBER } from 'sequelize';

@Controller('animes')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @ApiOperation({ summary: 'Получение всех аниме' })
  @ApiResponse({ status: 200, type: [Anime] })
  @Get()
  async getAllAnime(): Promise<Anime[]> {
    console.log('SERVER');
    return this.animeService.getAllAnime();
  }

  @ApiOperation({ summary: 'Получение аниме по ID' })
  @ApiResponse({ status: 200, type: Anime })
  @Get(':id')
  async getOneAnime(@Param('id') id: string): Promise<Anime> {
    return this.animeService.getOneAnime(Number(id));
  }

  @ApiOperation({ summary: 'Создание аниме' })
  @ApiResponse({ status: 200, type: Anime })
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseInterceptors(FileInterceptor('img'))
  @Post()
  async createAnime(
    @Body() dto: CreateAnimeDto,
    @UploadedFile() img,
  ): Promise<Anime> {
    return this.animeService.createAnime(dto, img);
  }

  @ApiOperation({ summary: 'Редактирование аниме' })
  @ApiResponse({ status: 200, type: Anime })
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseInterceptors(FileInterceptor('img'))
  @Put(':id')
  async updateAnime(
    @Body() dto: CreateAnimeDto,
    @UploadedFile() img,
    @Param('id') id: string,
  ): Promise<Anime> {
    return this.animeService.updateAnime({
      id: Number(id),
      dto,
      img,
    });
  }

  @ApiOperation({ summary: 'Удаление аниме' })
  @ApiResponse({ status: 200, type: NUMBER })
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @Delete(':id')
  async deleteAnime(@Param('id') id: string): Promise<number> {
    return this.animeService.deleteAnime(Number(id));
  }
}

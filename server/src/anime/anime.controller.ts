import { Body, Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Anime } from './anime.model';
import { AnimeService } from './anime.service';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('anime')
export class AnimeController {
    
    constructor(private animeService:AnimeService){}
    
    @ApiOperation({summary:"Получение всех аниме"})
    @ApiResponse({status:200,type:[Anime]})
    @Get()
    getAll(){
        return this.animeService.getAllAnime();
    };

    @ApiOperation({summary:"Создание аниме"})
    @ApiResponse({status:200,type:[Anime]})
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @UseInterceptors(FileInterceptor('img'))
    @Post()
    createAnime(@Body() dto:CreateAnimeDto,
                @UploadedFile() img){
        return this.animeService.createAnime(dto,img);
    }
}

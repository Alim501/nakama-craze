import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Color } from './colors.model';
import { CreateColorDto } from './dto/create-color.dto';

@Controller('colors')
export class ColorsController {

    constructor(private colorService: ColorsService){}

    @ApiOperation({summary:"Создание цвета"})
    @ApiResponse({status:200,type:Color})
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() colorDto:CreateColorDto){
        return this.colorService.createColor(colorDto);
    }

    @ApiOperation({summary:"Получение всех цветов"})
    @ApiResponse({status:200,type:[Color]})
    @Get()
    getAll(){
        return this.colorService.getAllColors();
    }
}

import { Body, Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Size } from './sizes.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateSizeDto } from './dto/create-size.dto';
import { SizesService } from './sizes.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('sizes')
export class SizesController {

    constructor(private sizesService:SizesService){}

    @ApiOperation({summary:"Создание размера"})
    @ApiResponse({status:200,type:[Size]})
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @UseInterceptors(FileInterceptor('img'))
    @Post()
    createPromocode(@Body() sizeDto: CreateSizeDto,
                    @UploadedFile() img){
      return this.sizesService.createSize(sizeDto,img);
    }

    @ApiOperation({summary:"Возвращение всех размеров"})
    @ApiResponse({status:200,type:[Size]})
    @Get()
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    getAllSizes(){
      return this.sizesService.getAllSizes();
    }
}

import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Promocode } from './promocodes.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreatePromocodeDto } from './dto/create-promocode.dto';
import { PromocodesService } from './promocodes.service';

@Controller('promocodes')
export class PromocodesController {
    constructor(private promocodesService:PromocodesService){}

    @ApiOperation({summary:"Создание промокода"})
    @ApiResponse({status:200,type:[Promocode]})
    @Post()
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    createPromocode(@Body() promocodeDto: CreatePromocodeDto){
      return this.promocodesService.createPromocode(promocodeDto);
    }

    @ApiOperation({summary:"Возвращение всех промокодов"})
    @ApiResponse({status:200,type:[Promocode]})
    @Get()
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    getAllPromocodes(){
      return this.promocodesService.getAllPromocodes();
    }
}

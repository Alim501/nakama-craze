import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Promocode } from './promocodes.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreatePromocodeDto } from './dto/create-promocode.dto';
import { PromocodesService } from './promocodes.service';

@Controller('promocodes')
export class PromocodesController {
  constructor(private promocodesService: PromocodesService) {}

  @ApiOperation({ summary: 'Создание промокода' })
  @ApiResponse({ status: 200, type: [Promocode] })
  @Post()
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async createPromocode(
    @Body() promocodeDto: CreatePromocodeDto,
  ): Promise<Promocode> {
    return this.promocodesService.createPromocode(promocodeDto);
  }

  @ApiOperation({ summary: 'Возвращение всех промокодов' })
  @ApiResponse({ status: 200, type: [Promocode] })
  @Get()
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async getAllPromocodes(): Promise<Promocode[]> {
    return this.promocodesService.getAllPromocodes();
  }

  @ApiOperation({ summary: 'Получение одного промокода' })
  @ApiResponse({ status: 200, type: Promocode })
  @Get(':id')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async getOnePromocode(@Param('id') id: string): Promise<Promocode> {
    return this.promocodesService.getPromocodeById(Number(id));
  }

  @ApiOperation({ summary: 'Обновление промокода' })
  @ApiResponse({ status: 200, type: Promocode })
  @Put(':id')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async updatePromocode(
    @Param('id') id: string,
    @Body() dto: CreatePromocodeDto,
  ): Promise<Promocode> {
    return this.promocodesService.updatePromocode(Number(id), dto);
  }

  @ApiOperation({ summary: 'Удаление промокода' })
  @ApiResponse({ status: 200, type: Promocode })
  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async deletePromocode(@Param('id') id: string): Promise<number> {
    return this.promocodesService.deletePromocode(Number(id));
  }
}

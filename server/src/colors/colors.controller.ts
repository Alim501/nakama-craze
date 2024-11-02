import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Color } from './colors.model';
import { CreateColorDto } from './dto/create-color.dto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { NUMBER } from 'sequelize';

@Controller('colors')
export class ColorsController {
  constructor(private colorService: ColorsService) {}

  @ApiOperation({ summary: 'Создание цвета' })
  @ApiResponse({ status: 200, type: Color })
  @UsePipes(ValidationPipe)
  @Post()
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async createColor(@Body() colorDto: CreateColorDto): Promise<Color> {
    return this.colorService.createColor(colorDto);
  }

  @ApiOperation({ summary: 'Получение всех цветов' })
  @ApiResponse({ status: 200, type: [Color] })
  @Get()
  async getAllColors(): Promise<Color[]> {
    return this.colorService.getAllColors();
  }

  @ApiOperation({ summary: 'Получение одного цвета' })
  @ApiResponse({ status: 200, type: Color })
  @Get(':id')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async getOneColor(@Param('id') id: string): Promise<Color> {
    return this.colorService.getOneColor(Number(id));
  }

  @ApiOperation({ summary: 'Обновление цвета' })
  @ApiResponse({ status: 200, type: Color })
  @Put(':id')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async updateColor(
    @Param('id') id: string,
    @Body() dto: CreateColorDto,
  ): Promise<Color> {
    return this.colorService.updateColor(Number(id), dto);
  }

  @ApiOperation({ summary: 'Удаление цвета' })
  @ApiResponse({ status: 200, type: NUMBER })
  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async deleteColor(@Param('id') id: string): Promise<number> {
    return this.colorService.deleteColor(Number(id));
  }
}

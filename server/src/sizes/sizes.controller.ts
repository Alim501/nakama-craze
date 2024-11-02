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
import { Size } from './sizes.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateSizeDto } from './dto/create-size.dto';
import { SizesService } from './sizes.service';

@Controller('sizes')
export class SizesController {
  constructor(private sizesService: SizesService) {}

  @ApiOperation({ summary: 'Создание размера' })
  @ApiResponse({ status: 200, type: Size })
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @Post()
  createSize(@Body() sizeDto: CreateSizeDto): Promise<Size> {
    return this.sizesService.createSize(sizeDto);
  }

  @ApiOperation({ summary: 'Возвращение всех размеров' })
  @ApiResponse({ status: 200, type: [Size] })
  @Get()
  getAllSizes(): Promise<Size[]> {
    return this.sizesService.getAllSizes();
  }

  @ApiOperation({ summary: 'Получение одного размера' })
  @ApiResponse({ status: 200, type: Size })
  @Get(':id')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async getOneSize(@Param('id') id: string): Promise<Size> {
    return this.sizesService.getOneSize(Number(id));
  }

  @ApiOperation({ summary: 'Обновление размера' })
  @ApiResponse({ status: 200, type: Size })
  @Put(':id')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async updateSize(
    @Param('id') id: number,
    @Body() dto: CreateSizeDto,
  ): Promise<Size> {
    return this.sizesService.updateSize(id, dto);
  }

  @ApiOperation({ summary: 'Удаление размера' })
  @ApiResponse({ status: 200, type: Size })
  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async deleteSize(@Param('id') id: string): Promise<number> {
    return this.sizesService.deleteSize(Number(id));
  }
}

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
import { Size } from './sizes.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateSizeDto } from './dto/create-size.dto';
import { SizesService } from './sizes.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('sizes')
export class SizesController {
  constructor(private sizesService: SizesService) {}

  @ApiOperation({ summary: 'Создание размера' })
  @ApiResponse({ status: 200, type: [Size] })
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseInterceptors(FileInterceptor('img'))
  @Post()
  createPromocode(@Body() sizeDto: CreateSizeDto, @UploadedFile() img) {
    return this.sizesService.createSize(sizeDto, img);
  }
  
  @ApiOperation({ summary: 'Возвращение всех размеров' })
  @ApiResponse({ status: 200, type: [Size] })
  @Get()
  getAllSizes() {
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
  @UseInterceptors(FileInterceptor('img'))
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async updateSize(
    @Param('id') id: string,
    @Body() dto: CreateSizeDto,
    @UploadedFile() img,
  ): Promise<Size> {
    return this.sizesService.updateSize({id:Number(id),dto,img});
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

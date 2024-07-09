import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Получение списка продуктов' })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  async getAllProducts(@Query() query): Promise<Product[]> {
    return this.productsService.getAllProducts(query);
  }

  @ApiOperation({ summary: 'Получение одного продукта' })
  @ApiResponse({ status: 200, type: Product })
  @Get(':id')
  async getOneProduct(@Param('id') id: number): Promise<Product> {
    return this.productsService.getOneProductById(id);
  }

  @ApiOperation({ summary: 'Создание продукта' })
  @ApiResponse({ status: 200, type: [Product] })
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'icon', maxCount: 1 }, { name: 'imgs' }]),
  )
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async createProduct(
    @Body() sizeDto: CreateProductDto,
    @UploadedFiles()
    files: { icon?: Express.Multer.File[]; background?: Express.Multer.File[] },
  ): Promise<Product> {
    return this.productsService.createProduct(sizeDto, files);
  }
  @ApiOperation({ summary: 'Редактирование продукта' })
  @ApiResponse({ status: 200, type: [Product] })
  @Put(':id')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'icon', maxCount: 1 }, { name: 'imgs' }]),
  )
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async updatePromocode(
    @Body() sizeDto: CreateProductDto,
    @UploadedFiles()
    files: { icon?: Express.Multer.File[]; background?: Express.Multer.File[] },
  ): Promise<Product> {
    return this.productsService.createProduct(sizeDto, files);
  }
}

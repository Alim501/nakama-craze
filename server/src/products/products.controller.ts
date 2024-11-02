import {
  Body,
  Controller,
  Delete,
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
import { NUMBER } from 'sequelize';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Получение списка продуктов' })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  async getAllProducts(
    @Query() query,
  ): Promise<{ products: Product[]; total: number }> {
    return this.productsService.getAllProducts(query);
  }

  @ApiOperation({ summary: 'Получение одного продукта' })
  @ApiResponse({ status: 200, type: Product })
  @Get(':slug')
  async getOneProduct(@Param('slug') slug: string): Promise<Product> {
    return this.productsService.getOneProductById(slug);
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
    @Body() productDto: CreateProductDto,
    @UploadedFiles()
    files: { icon?: Express.Multer.File[]; background?: Express.Multer.File[] },
  ): Promise<Product> {
    return this.productsService.createProduct(productDto, files);
  }

  @ApiOperation({ summary: 'Редактирование продукта' })
  @ApiResponse({ status: 200, type: [Product] })
  @Put(':id')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'icon', maxCount: 1 }, { name: 'imgs' }]),
  )
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async updateProduct(
    @Param('id') id: string,
    @Body() sizeDto: CreateProductDto,
    @UploadedFiles()
    files: { icon?: Express.Multer.File[]; background?: Express.Multer.File[] },
  ): Promise<Product> {
    return this.productsService.updateProduct(id, sizeDto, files);
  }

  @ApiOperation({ summary: 'Удаление продукта' })
  @ApiResponse({ status: 200, type: NUMBER })
  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async deleteBasketItem(@Param('id') id: number): Promise<number> {
    return this.productsService.deleteProduct(id);
  }
}

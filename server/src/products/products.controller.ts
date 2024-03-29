import { Body, Controller, Get, Post, Req, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { query } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Получение списка продуктов' })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  getAll(@Req() req) {
    
    return this.productsService.getAllProducts(req.query);
  }

  @ApiOperation({summary:"Создание продукта"})
  @ApiResponse({status:200,type:[Product]})
  @Post()
  @UseInterceptors(AnyFilesInterceptor()) 
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  createPromocode(@Body() sizeDto: CreateProductDto,
                  @UploadedFiles() imgs){
    return this.productsService.createProduct(sizeDto,imgs);
  }
}

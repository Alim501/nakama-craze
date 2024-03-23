import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Controller('products')
export class ProductsController {
  constructor(private colorService: ProductsService) {}

//   @ApiOperation({ summary: 'Получение всех цветов' })
//   @ApiResponse({ status: 200, type: [Product] })
//   @Get()
//   getAll() {
//     return this.colorService.();
//   }
}

import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Category } from './categories.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService:CategoriesService){}

  @ApiOperation({summary:"Создание категории"})
  @ApiResponse({status:200,type:[Category]})
  @Post()
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async createCategory(@Body() categoryDto: CreateCategoryDto):Promise<Category>{
    console.log('Request Body:', categoryDto);
    return this.categoriesService.createCategory(categoryDto);
  }

  @ApiOperation({summary:"Получение всех категорий"})
  @ApiResponse({status:200,type:[Category]})
  @Get()
  async getAllCategories():Promise<Category[]>{
    return this.categoriesService.getAllCategories();
  }

  @ApiOperation({summary:"Получение одной категорий"})
  @ApiResponse({status:200,type:Category})
  @Get(':id')
  async getOneCategory(@Param('id') id: string):Promise<Category>{
    return this.categoriesService.getOneCategory(Number(id));
  }

  @ApiOperation({summary:"Обновление категории"})
  @ApiResponse({status:200,type:Category})
  @Put(':id')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async updateCategory(@Param('id') id: string, @Body() dto: CreateCategoryDto):Promise<Category>{
    return this.categoriesService.updateCategory(Number(id),dto);
  }

  @ApiOperation({summary:"Удаление категории"})
  @ApiResponse({status:200,type:Category})
  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async deleteCategory(@Param('id') id: string):Promise<number>{
    return this.categoriesService.deleteCategory(Number(id));
  }
  
}

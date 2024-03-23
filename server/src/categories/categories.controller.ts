import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
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
  createCategory(@Body() categoryDto: CreateCategoryDto){
    return this.categoriesService.createCategory(categoryDto);
  }

  @ApiOperation({summary:"Получение всех категорий"})
  @ApiResponse({status:200,type:[Category]})
  @Get()
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  getAllCategories(){
    return this.categoriesService.getAllCategories();
  }
}

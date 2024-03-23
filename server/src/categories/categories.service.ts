import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './categories.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private categoryRepository:typeof Category){}

    async createCategory(dto:CreateCategoryDto){
        return this.categoryRepository.create(dto);
    }
    
    async getAllCategories(){
        return this.categoryRepository.findAll();
    }
}

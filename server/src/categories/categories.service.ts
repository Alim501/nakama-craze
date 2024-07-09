import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './categories.model';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { Size } from 'src/sizes/sizes.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
  ) {}

  async createCategory(dto: CreateCategoryDto): Promise<Category> {
    return this.categoryRepository.create(dto);
  }

  async getAllCategories(): Promise<Category[]> {
    return this.categoryRepository.findAll({ include: { model: Size, attributes: ['code'] } });
  }

  async getOneCategory(id: number): Promise<Category> {
    return this.categoryRepository.findOne({ where: { id } });
  }
  async updateCategory(id: number, dto: CreateCategoryDto): Promise<Category> {
    await this.categoryRepository.update(dto, { where: { id } });
    return this.categoryRepository.findOne({ where: { id } });
  }
  async deleteCategory(id: number): Promise<number> {
    return this.categoryRepository.destroy({
      where: { id },
    });
  }
}

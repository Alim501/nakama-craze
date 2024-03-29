import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';
import { FilesService } from 'src/files/files.service';
import { Product_Img } from './products_img.model';
import { ColorsService } from 'src/colors/colors.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    @InjectModel(Product) private product_imgRepository: typeof Product_Img,
    private fileService: FilesService,
  ) {}

  async createProduct(dto: CreateProductDto, imgs) {
    const product = await this.productRepository.create(dto);
    for (let img of imgs) {
      const fileName = await this.fileService.createFile(img, 'Products');
        img = await this.product_imgRepository.create({
        img: fileName,
        product_id: product.id,
      });
    }
    return { product, imgs };
  }

  async getAllProducts(query: any) {
    let { anime_id, category_id, limit, page } = query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    if (anime_id && category_id) {
      return this.productRepository.findAll({
        where: { anime_id, category_id },
      });
    } else if (!anime_id && category_id) {
      return this.productRepository.findAll({ where: { category_id } });
    } else if (anime_id && !category_id) {
      return this.productRepository.findAll({ where: { anime_id } });
    } else {
      return this.productRepository.findAll();
    }
  }
  async getProductById(product_id: number) {
    const product=await this.productRepository.findOne({ where: { id: product_id } });
    const colors=product.colors
    const sizes=product.category.sizes
    const imgs=product.imgs
    return {product,colors,sizes,imgs}
  }

}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';
import { FilesService } from 'src/files/files.service';
import { Product_Img } from './products_img.model';
import { Product_Color } from './product_color.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    @InjectModel(Product_Color) private product_colorRepository: typeof Product_Color,
    @InjectModel(Product_Img) private product_imgRepository: typeof Product_Img,
    private fileService: FilesService,
  ) {}

  async createProduct(dto: CreateProductDto,files) {
    console.log(files)
    const icon=await this.fileService.createFile(files.icon[0],'Products')
    const product = await this.productRepository.create({...dto,icon});
    if (dto.colors_id && dto.colors_id.length > 1) {
      const colors = dto.colors_id.map(color_id =>
        this.product_colorRepository.create({
          product_id:product.id,
          color_id,
        }),
      );
    }else
    {
      this.product_colorRepository.create({
        product_id:product.id,
        color_id:dto.colors_id[0],
      });
    }

    for (let img of files.imgs) {
      const fileName = await this.fileService.createFile(img, 'Products');
        img = await this.product_imgRepository.create({
        img: fileName,
        product_id: product.id,
      });
    }
    return  product;
  }

  async getAllProducts(query: any) {
    let { anime_id, category_id, limit, page } = query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    if (anime_id && category_id) {
      return this.productRepository.findAll({
        where: { anime_id, category_id },
        include:['colors'] 
      });
    } else if (!anime_id && category_id) {
      return this.productRepository.findAll({ where: { category_id  },include:['colors']  });
    } else if (anime_id && !category_id) {
      return this.productRepository.findAll({ where: { anime_id },include:['colors'] });
    } else {
      return this.productRepository.findAll({include:['colors'] });
    }
  }
  async getOneProductById(product_id: number) {
    const product=await this.productRepository.findOne({ where: { id: product_id },include:['colors','imgs',{ 
      association: 'category', 
      include: ['sizes'] 
    }] });
    return product
  }

}

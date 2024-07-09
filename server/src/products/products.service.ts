import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';
import { FilesService } from 'src/files/files.service';
import { Product_Img } from './products_img.model';
import { Product_Color } from './product_color.model';
import { Anime } from 'src/anime/anime.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    @InjectModel(Product_Color)
    private product_colorRepository: typeof Product_Color,
    @InjectModel(Product_Img) private product_imgRepository: typeof Product_Img,
    private fileService: FilesService,
  ) {}

  async createProduct(dto: CreateProductDto, files) {
    const icon = await this.fileService.createFile(files.icon[0], 'Products');
    const product = await this.productRepository.create({ ...dto, icon });

    await this.createOrUpdateColors(dto.colors_id, product.id);
    await this.createOrUpdateImages(files.imgs, product.id);

    return product;
  }

  async updateProduct(id: string, dto: CreateProductDto, files?) {
    const product = await this.productRepository.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }

    if (files && files.icon) {
      const icon = await this.fileService.createFile(files.icon[0], 'Products');
      product.icon = icon;
    }

    await product.update(dto);

    await this.createOrUpdateColors(dto.colors_id, product.id);
    await this.createOrUpdateImages(files.imgs, product.id);

    return product;
  }

  async createOrUpdateColors(colors_id: number[], product_id: number) {
    if (!colors_id || !colors_id.length) return;

    await this.product_colorRepository.destroy({
      where: { product_id },
    });

    const colorPromises = colors_id.map((color_id) =>
      this.product_colorRepository.create({
        product_id,
        color_id,
      }),
    );

    await Promise.all(colorPromises);
  }

  async createOrUpdateImages(imgs, product_id: number) {
    if (!imgs || !imgs.length) return;

    await this.product_imgRepository.destroy({
      where: { product_id },
    });

    for (const img of imgs) {
      const fileName = await this.fileService.createFile(img, 'Products');
      await this.product_imgRepository.create({
        img: fileName,
        product_id,
      });
    }
  }

  async getAllProducts(query: any) {
    const { anime_id, category_id, limit, page } = query;
    const offset = (page - 1) * limit || 0;
    const options: any = {
      include: [
        {
          model: Anime,
          attributes: ['title'],
        },
        'colors',
      ],
      limit: limit || 9,
      offset,
    };

    if (anime_id) options.where = { ...options.where, anime_id };
    if (category_id) options.where = { ...options.where, category_id };

    return this.productRepository.findAll(options);
  }

  async getOneProductById(product_id: number) {
    const product = await this.productRepository.findOne({
      where: { id: product_id },
      include: [
        {
          association: 'colors',
          attributes: ['color', 'title', 'text_color'],
        },
        {
          association: 'imgs',
          attributes: ['img'],
        },
        {
          association: 'category',
          attributes: ['title'], 
          include: [
            {
              association: 'sizes',
              attributes: ['code'], 
            },
          ],
        },
      ],
    });
    return product;
  }
}

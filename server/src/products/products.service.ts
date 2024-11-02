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

  async createProduct(dto: CreateProductDto, files): Promise<Product> {
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

  async createOrUpdateColors(
    colors_id: number[],
    product_id: number,
  ): Promise<Product> {
    if (!colors_id || !colors_id.length) return;

    await this.product_colorRepository.destroy({
      where: { product_id },
    });
    let colorPromises;
    if (colors_id.length > 1) {
      colorPromises = colors_id.map((color_id) =>
        this.product_colorRepository.create({
          product_id,
          color_id,
        }),
      );
    } else {
      colorPromises = [
        this.product_colorRepository.create({
          product_id,
          color_id: colors_id[0],
        }),
      ];
    }

    await Promise.all(colorPromises);
  }

  async createOrUpdateImages(imgs, product_id: number): Promise<any> {
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

  async getAllProducts(
    query: any,
  ): Promise<{ products: Product[]; total: number }> {
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

    const products = await this.productRepository.findAll(options);

    const totalOptions: any = { ...options };
    delete totalOptions.limit;
    delete totalOptions.offset;

    const total = await this.productRepository.count({
      where: totalOptions.where,
    });

    return { products, total };
  }

  async getOneProductById(slug: string): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { slug: slug },
      include: [
        {
          association: 'colors',
          attributes: ['id', 'color', 'title', 'text_color'],
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
              attributes: ['id', 'code'],
            },
          ],
        },
      ],
    });
    return product;
  }

  async deleteProduct(id: number): Promise<number> {
    return this.productRepository.destroy({
      where: { id },
    });
  }
}

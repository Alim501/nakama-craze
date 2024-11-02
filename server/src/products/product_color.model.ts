import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from 'src/products/products.model';
import { Color } from '../colors/colors.model';

@Table({ tableName: 'product_color', createdAt: false, updatedAt: false })
export class Product_Color extends Model<Product_Color> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Product)
  @ApiProperty({ example: '1', description: 'ID продукта' })
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: 'CASCADE' })
  product_id: number;

  @ForeignKey(() => Color)
  @ApiProperty({ example: '1', description: 'ID цвета' })
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: 'CASCADE' })
  color_id: number;
}

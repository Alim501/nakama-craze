import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from 'src/products/products.model';
import { Product_Color } from '../products/product_color.model';
import { Item } from 'src/items/items.model';

interface ColorCreationAttrs {
  title: string;
  color: string;
}

@Table({ tableName: 'colors' })
export class Color extends Model<Color, ColorCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'White', description: 'Название' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;
  @ApiProperty({ example: '#FFF', description: 'Код цвета' })
  @Column({ type: DataType.STRING, allowNull: false })
  color: string;
  @ApiProperty({ example: '#FFF', description: 'Код цвета для текста' })
  @Column({ type: DataType.STRING, allowNull: false })
  text_color: string;

  @BelongsToMany(() => Product, () => Product_Color)
  products: Product[];

  @HasMany(() => Item, { onDelete: 'CASCADE' })
  items: Item[];
}

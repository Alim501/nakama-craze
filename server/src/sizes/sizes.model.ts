import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from 'src/categories/categories.model';
import { Item } from 'src/items/items.model';

interface SizeCreationAttrs {
  title: string;
  code: string;
  category_id: number;
  length: number;
  shoulder: number;
  chest: number;
  sleeve: number;
}

@Table({ tableName: 'sizes' })
export class Size extends Model<Size, SizeCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'М размер Худи ', description: 'Название' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;
  @ApiProperty({ example: 'М', description: 'Буква размера' })
  @Column({ type: DataType.STRING, allowNull: false })
  code: string;
  @ApiProperty({ example: '52', description: 'Длина' })
  @Column({ type: DataType.DECIMAL(3, 1), allowNull: false })
  length: number;
  @ApiProperty({ example: '52', description: 'Длина плеча' })
  @Column({ type: DataType.DECIMAL(3, 1), allowNull: false })
  shoulder: number;
  @ApiProperty({ example: '52', description: 'Обхват груди' })
  @Column({ type: DataType.DECIMAL(3, 1), allowNull: false })
  chest: number;
  @ApiProperty({ example: '52', description: 'Длина рукава' })
  @Column({ type: DataType.DECIMAL(3, 1), allowNull: false })
  sleeve: number;
  @ForeignKey(() => Category)
  @ApiProperty({ example: '1', description: 'ID категории' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  category_id: number;

  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => Item, { onDelete: 'CASCADE' })
  items: Item[];
}

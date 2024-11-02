import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  Model,
  Table,
} from 'sequelize-typescript';
import { Basket_item } from './basket_item.model';
import { Item } from 'src/items/items.model';
import { User } from 'src/users/users.model';

interface BasketCreationAttrs {
  user_id: number;
}

@Table({ tableName: 'baskets' })
export class Basket extends Model<Basket, BasketCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: '1', description: 'ID пользователя' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsToMany(() => Item, () => Basket_item)
  items: Item[];
}

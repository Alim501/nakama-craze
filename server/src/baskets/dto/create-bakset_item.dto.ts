import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateBasket_itemDto {
  @ApiProperty({ example: '1', description: 'Количество' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly quantity: number;
  @ApiProperty({ example: '1', description: 'Id корзины' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly basket_id: number;
  @ApiProperty({ example: '1', description: 'ID предмета' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly item_id: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateOrder_itemDto {
  @ApiProperty({ example: '1', description: 'Количество' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly quantity: number;
  @ApiProperty({ example: '1', description: 'Id заказа' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly order_id: number;
  @ApiProperty({ example: '1', description: 'ID предмета' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly item_id: number;
}

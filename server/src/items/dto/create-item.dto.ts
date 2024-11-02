import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateItemDto {
  @ApiProperty({ example: '1', description: 'Id продукта' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly product_id: number;
  @ApiProperty({ example: '1', description: 'Id цвета' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly color_id: number;
  @ApiProperty({ example: '1', description: 'Id размера' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly size_id: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProduct_ImgDto {
  @ApiProperty({ example: '/M.png', description: 'Описание' })
  @IsString({ message: 'Должно быть строкой' })
  readonly img: string;
  @ApiProperty({ example: '1', description: 'ID продукта' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly product_id: number;
}

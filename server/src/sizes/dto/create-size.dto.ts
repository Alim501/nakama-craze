import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateSizeDto {
  @ApiProperty({ example: 'М размер футболки ', description: 'Название' })
  @IsString({ message: 'Должно быть строкой' })
  readonly title: string;
  @ApiProperty({ example: 'М', description: 'буква размера' })
  @IsString({ message: 'Должно быть строкой' })
  readonly code: string;
  @ApiProperty({ example: '52', description: 'Длина' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly length: number;
  @ApiProperty({ example: '52', description: 'Длина плеча' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly shoulder: number;
  @ApiProperty({ example: '52', description: 'Обхват груди' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly chest: number;
  @ApiProperty({ example: '52', description: 'Длина рукава' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly sleeve: number;
  @ApiProperty({ example: '1', description: 'ID категории' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly category_id: number;
}

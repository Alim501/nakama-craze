import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNumberString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'GUTS ', description: 'Название' })
  @IsString({ message: 'Должно быть строкой' })
  title: string;
  @ApiProperty({ example: '11.900', description: 'Цена' })
  @IsNumber({}, { message: 'Должно быть числом' })
  price: number;
  @ApiProperty({ example: 'Прекрасная футболка GUTS', description: 'Описание' })
  @IsString({ message: 'Должно быть строкой' })
  desc: string;
  @ApiProperty({ example: 'GUTS-shirt', description: 'Ссылка' })
  @IsString({ message: 'Должно быть строкой' })
  slug: string;
  @ApiProperty({ example: 'example.png', description: 'Путь к файлу' })
  @IsString({ message: 'Должно быть строкой' })
  icon?: string;
  @ApiProperty({ example: '1', description: 'ID аниме' })
  @IsNumber({}, { message: 'Должно быть числом' })
  anime_id: number;
  @ApiProperty({ example: '1', description: 'ID категории' })
  @IsNumber({}, { message: 'Должно быть числом' })
  category_id: number;
  @ApiProperty({ example: '1', description: 'ID категории' })
  @IsNumberString(
    { no_symbols: true },
    { each: true, message: 'Должен быть числом' },
  )
  colors_id: number[];
}

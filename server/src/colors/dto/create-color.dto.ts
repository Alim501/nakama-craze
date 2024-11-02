import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateColorDto {
  @ApiProperty({ example: 'White ', description: 'Название' })
  @IsString({ message: 'Должно быть строкой' })
  readonly title: string;
  @ApiProperty({ example: '#FFF', description: 'Код цвета' })
  @IsString({ message: 'Должно быть строкой' })
  readonly color: string;
  @ApiProperty({ example: '#FFF', description: 'Код цвета' })
  @IsString({ message: 'Должно быть строкой' })
  readonly text_color: string;
}

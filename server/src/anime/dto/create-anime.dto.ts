import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAnimeDto {
  @ApiProperty({ example: 'Berserk ', description: 'Название' })
  @IsString({ message: 'Должно быть строкой' })
  readonly title: string;
  @ApiProperty({ example: 'М.png', description: 'Параметры размера' })
  @IsString({ message: 'Должно быть строкой' })
  readonly img?: string;
}

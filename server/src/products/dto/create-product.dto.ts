import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class CreateProductDto{

    @ApiProperty({example:'GUTS ',description:"Название"})
    @IsString({message:"Должно быть строкой"})
    title:string;
    @ApiProperty({example:'11.900',description:"Цена"})
    @IsNumber({},{message:"Должно быть числом"})
    price:number;
    @ApiProperty({example:'Прекрасная футболка GUTS',description:"Описание"})
    @IsString({message:"Должно быть строкой"})
    decs:string;
    @ApiProperty({example:'example.png',description:"Путь к файлу"})
    @IsString({message:"Должно быть строкой"})
    icon:string;
    @ApiProperty({example:'1',description:"ID аниме"})
    @IsNumber({},{message:"Должно быть числом"})
    anime_id:number;
    @ApiProperty({example:'1',description:"ID категории"})
    @IsNumber({},{message:"Должно быть числом"})
    category_id:number;
}
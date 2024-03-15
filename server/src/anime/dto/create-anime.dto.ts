import { ApiProperty } from "@nestjs/swagger";
import { IsString} from "class-validator";

export class CreateAnimeDto{

    @ApiProperty({example:'Berserk ',description:"Название"})
    @IsString({message:"Должно быть строкой"})
    readonly title:string;
    @ApiProperty({example:'/berserk.png',description:"Путь к картинке"})
    @IsString({message:"Должно быть строкой"})
    readonly img:string;

}
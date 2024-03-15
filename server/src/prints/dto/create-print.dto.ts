import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString} from "class-validator";

export class CreatePrintDto{

    @ApiProperty({example:'Guts ',description:"Название"})
    @IsString({message:"Должно быть строкой"})
    readonly title:string;
    @ApiProperty({example:'/M.png',description:"Путь к картинке"})
    @IsString({message:"Должно быть строкой"})
    readonly img:string;
    @ApiProperty({example:'1',description:"Id аниме"})
    @IsNumber({},{message:"Должно быть числом"})
    readonly anime_id:number;

}
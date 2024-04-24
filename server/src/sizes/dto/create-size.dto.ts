import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString} from "class-validator";

export class CreateSizeDto{

    @ApiProperty({example:'М размер футболки ',description:"Название"})
    @IsString({message:"Должно быть строкой"})
    readonly title:string;
    @ApiProperty({example:'М',description:"буква размера"})
    @IsString({message:"Должно быть строкой"})
    readonly code:string;
    @ApiProperty({example:'М.png',description:"Параметры размера"})
    @IsString({message:"Должно быть строкой"})
    readonly img?:string;
    @ApiProperty({example:'1',description:"ID категории"})
    @IsNumber({},{message:"Должно быть числом"})
    readonly category_id:number;

}
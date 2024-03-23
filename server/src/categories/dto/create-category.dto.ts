import { ApiProperty } from "@nestjs/swagger";
import { IsString} from "class-validator";

export class CreateCategoryDto{

    @ApiProperty({example:'Футболка ',description:"Название"})
    @IsString({message:"Должно быть строкой"})
    readonly title:string;
    @ApiProperty({example:'Наши футболки-лучшие',description:"Описание"})
    @IsString({message:"Должно быть строкой"})
    readonly desc:string;

}
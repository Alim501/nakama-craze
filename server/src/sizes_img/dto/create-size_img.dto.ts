import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString} from "class-validator";

export class CreateSizeDto{

    @ApiProperty({example:'Футболка ',description:"Название"})
    @IsString({message:"Должно быть строкой"})
    readonly title:string;
    @ApiProperty({example:'Наши футболки-лучшие',description:"Описание"})
    @IsNumber({},{message:"Должно быть числом"})
    readonly category_id:number;
    @ApiProperty({example:'/M.png',description:"Описание"})
    @IsString({message:"Должно быть строкой"})
    readonly img:string;

}
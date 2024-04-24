import { ApiProperty } from "@nestjs/swagger";
import { IsString} from "class-validator";

export class CreateCategoryDto{

    @ApiProperty({example:'Футболка ',description:"Название"})
    @IsString({message:"Должно быть строкой"})
    readonly title:string;

}
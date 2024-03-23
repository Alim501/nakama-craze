import { ApiProperty } from "@nestjs/swagger";
import { IsNumber} from "class-validator";

export class CreateItemDto{

    @ApiProperty({example:'1',description:"Id продукта"})
    @IsNumber({},{message:"Должно быть числом"})
    readonly product_id:number;
    @ApiProperty({example:'1',description:"Id одежды"})
    @IsNumber({},{message:"Должно быть числом"})
    readonly storage_id:number;
}
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString} from "class-validator";

export class CreatePromocodeDto{

    @ApiProperty({example:'KZ200',description:"Код промокода"})
    @IsString({message:"Должно быть строкой"})
    readonly code:string;
    @ApiProperty({example:'10',description:"Процент скидки"})
    @IsNumber({},{message:"Должно быть числом"})
    readonly percent:number;
    @ApiProperty({example:'11.11.2011',description:"Срок когда истечет"})
    @IsNumber({},{message:"Должно быть числом"})
    readonly expire_at:number;

}
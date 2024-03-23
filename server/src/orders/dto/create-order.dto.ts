import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString} from "class-validator";

export class CreateOrderDto{

    @ApiProperty({example:'1',description:"Id пользователя"})
    @IsNumber({},{message:"Должно быть числом"})
    readonly user_id:number;
    @ApiProperty({example:'готово',description:"Статус заказа"})
    @IsString({message:"Должно быть строкой"})
    readonly status:string;
    @ApiProperty({example:'1523131',description:"Трек-код"})
    @IsNumber({},{message:"Должно быть строкой"})
    readonly track_code:number;
    @ApiProperty({example:'1',description:"Id промокода"})
    @IsNumber({},{message:"Должно быть числом"})
    readonly promocode_id:number;
    @ApiProperty({example:'1',description:"Id order item"})
    @IsNumber({},{message:"Должно быть числом"})
    readonly order_item_id:number;
}
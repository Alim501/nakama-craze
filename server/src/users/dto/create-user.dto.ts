import { ApiProperty } from "@nestjs/swagger";
import { IsString, min,Length,IsEmail } from "class-validator";

export class CreateUserDto{

    @ApiProperty({example:'user@gmail.com',description:"Почтовый вдрес"})
    @IsString({message:"Должно быть строкой"})
    @IsEmail({},{message:"Некорректный email"})
    readonly email:string;
    @ApiProperty({example:'user',description:"Ник пользователя"})
    @IsString({message:"Должно быть строкой"})
    readonly name:string;
    @ApiProperty({example:'P@ssword11',description:"Пароль пользователя"})
    @IsString({message:"Должно быть строкой"})
    @Length(4,16,{message:"Не меньше 4 и не больше 16"})
    readonly password:string;

}
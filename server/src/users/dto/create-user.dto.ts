import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{

    @ApiProperty({example:'user@gmail.com',description:"Почтовый вдрес"})
    readonly email:string;
    @ApiProperty({example:'user',description:"Ник пользователя"})
    readonly name:string;
    @ApiProperty({example:'P@ssword11',description:"Пароль пользователя"})
    readonly password:string;

}
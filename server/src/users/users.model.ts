import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs{
    email:string;
    name:string;
    password:string;
}

@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'user@gmail.com',description:"Почтовый адрес"})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    email:string;
    @ApiProperty({example:'user',description:"Ник пользователя"})
    @Column({type:DataType.STRING,allowNull:false})
    name:string;
    @ApiProperty({example:'Password111',description:"Пароль"})
    @Column({type:DataType.STRING,allowNull:false})
    password:string;
    @ApiProperty({example:'user',description:"Роль пользователя"})
    @Column({type:DataType.STRING,defaultValue:"user"})
    role:string;
}
import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ColorCreationAttrs{
    title:string;
    color:string;
}

@Table({tableName:'colors'})
export class Color extends Model<Color, ColorCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'White',description:"Название"})
    @Column({type:DataType.STRING,allowNull:false})
    title:string;
    @ApiProperty({example:'#FFF',description:"Код цвета"})
    @Column({type:DataType.STRING,allowNull:false})
    color:string;
}
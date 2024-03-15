import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface SizeCreationAttrs{
    title:string;
    code:string;
    category_id:number;
}

@Table({tableName:'sizes'})
export class Size extends Model<Size, SizeCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'М размер Худи ',description:"Название"})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    title:string;
    @ApiProperty({example:'М',description:"Буква размера"})
    @Column({type:DataType.STRING,allowNull:false})
    code:string;
    @ApiProperty({example:'1',description:"ID категории"})
    @Column({type:DataType.INTEGER,allowNull:true})
    category_id:number;
}
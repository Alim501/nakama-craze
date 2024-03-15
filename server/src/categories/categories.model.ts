import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CategoryCreationAttrs{
    title:string;
    decs:string;
}

@Table({tableName:'categories'})
export class Category extends Model<Category, CategoryCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'Футболка ',description:"Название"})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    title:string;
    @ApiProperty({example:'Наши футболки-лучшие',description:"Описание"})
    @Column({type:DataType.STRING,allowNull:false})
    decs:string;
}
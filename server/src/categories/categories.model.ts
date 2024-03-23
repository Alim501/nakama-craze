import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Product } from "src/products/products.model";
import { Size } from "src/sizes/sizes.model";

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

    @HasOne(()=>Product)
    products:Product[]

    @HasMany(()=>Size)
    sizes:Size[]
}
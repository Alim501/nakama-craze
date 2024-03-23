import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Product } from "src/products/products.model";

interface AnimeCreationAttrs{
    title:string;
    img:string;
}

@Table({tableName:'anime'})
export class Anime extends Model<Anime, AnimeCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'Berserk',description:"Название"})
    @Column({type:DataType.STRING,allowNull:false})
    title:string;
    @ApiProperty({example:'sizes/M.png',description:"Путь к файлу"})
    @Column({type:DataType.STRING,allowNull:false})
    img:string;

    @HasMany(()=>Product)
    products:Product[]
}
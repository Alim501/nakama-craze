import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ProductCreationAttrs{
    title:string;
    price:number;
    decs:string;
    icon:string;
    print_id:number;
    category_id:number;
}

@Table({tableName:'products'})
export class Product extends Model<Product, ProductCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'GUTS ',description:"Название"})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    title:string;
    @ApiProperty({example:'11.900',description:"Цена"})
    @Column({type:DataType.DECIMAL(5,3),allowNull:false})
    price:number;
    @ApiProperty({example:'Прекрасная футболка по мотивам берсерка',description:"Описание"})
    @Column({type:DataType.STRING,allowNull:false})
    decs:string;
    @ApiProperty({example:'example.png',description:"Путь к файлу"})
    @Column({type:DataType.STRING,allowNull:false})
    icon:string;
    @ApiProperty({example:'1',description:"ID рисунка"})
    @Column({type:DataType.INTEGER,allowNull:true})
    print_id:number;
    @ApiProperty({example:'1',description:"ID категории"})
    @Column({type:DataType.INTEGER,allowNull:true})
    category_id:number;
}
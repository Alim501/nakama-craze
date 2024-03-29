import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "./products.model";

interface Product_ImgCreationAttrs{
    img:string;
    product_id:number;
}

@Table({tableName:'products_img'})
export class Product_Img extends Model<Product_Img, Product_ImgCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'GUTS1.png ',description:"Картинка"})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    img:string;

    @ForeignKey(()=>Product)
    @ApiProperty({example:'1',description:"ID продукта"})
    @Column({type:DataType.INTEGER,allowNull:true})
    product_id:number;
    
    @BelongsTo(()=>Product)
    product:Product    
}
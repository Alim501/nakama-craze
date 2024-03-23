import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Product_Img } from "./products_img.model";
import { Category } from "src/categories/categories.model";
import { Item } from "src/items/items.model";
import { Product_Color } from "src/colors/product_color.model";
import { Color } from "src/colors/colors.model";
import { Anime } from "src/anime/anime.model";

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
    
    @ForeignKey(()=>Anime)
    @ApiProperty({example:'1',description:"ID аниме"})
    @Column({type:DataType.INTEGER,allowNull:true})
    anime_id:number;
    
    @BelongsTo(()=>Anime)
    anime:Anime
    
    @ForeignKey(()=>Category)
    @ApiProperty({example:'1',description:"ID категории"})
    @Column({type:DataType.INTEGER,allowNull:true})
    category_id:number;
    
    @BelongsTo(()=>Category)
    category:Category
    
    @HasMany(()=>Product_Img)
    imgs:Product_Img[]

    @HasMany(()=>Item)
    items:Item[]

    @BelongsToMany(()=>Color,()=>Product_Color)
    colors:Color[];
    
}
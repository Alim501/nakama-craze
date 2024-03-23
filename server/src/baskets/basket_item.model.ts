import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Basket } from "./basket.model";
import { Item } from "src/items/items.model";



@Table({tableName:'basket_items'})
export class Basket_item extends Model<Basket_item>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'1',description:"Количество"})
    @Column({type:DataType.INTEGER,allowNull:false,defaultValue:1})
    quantity:number;

    @ForeignKey(()=>Basket)
    @ApiProperty({example:'1',description:"ID корзины"})
    @Column({type:DataType.INTEGER,allowNull:false})
    basket_id:number;

    @ForeignKey(()=>Item)
    @ApiProperty({example:'1',description:"ID предмета"})
    @Column({type:DataType.INTEGER,allowNull:true})
    item_id:number;

}
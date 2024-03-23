import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo,BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Basket } from "src/baskets/basket.model";
import { Basket_item } from "src/baskets/basket_item.model";
import { Color } from "src/colors/colors.model";
import { Order_item } from "src/orders/order_item.model";
import { Order } from "src/orders/orders.model";
import { Product } from "src/products/products.model";
import { Size } from "src/sizes/sizes.model";

interface ItemCreationAttrs{
    product_id:number;
    storage_id:number;
}

@Table({tableName:'items'})
export class Item extends Model<Item, ItemCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;

    @ForeignKey(()=>Product)
    @ApiProperty({example:'1',description:"ID продукта"})
    @Column({type:DataType.INTEGER,allowNull:false})
    product_id:number;

    @BelongsTo(()=>Product)
    product:Product

    @ForeignKey(()=>Color)
    @ApiProperty({example:'1',description:"ID цвета"})
    @Column({type:DataType.INTEGER,allowNull:false})
    color_id:number;
    
    @BelongsTo(()=>Color)
    storage:Color

    @ForeignKey(()=>Size)
    @ApiProperty({example:'1',description:"ID размера"})
    @Column({type:DataType.INTEGER,allowNull:false})
    size_id:number;
    
    @BelongsTo(()=>Size)
    sizes:Size

    @BelongsToMany(()=>Basket,()=>Basket_item)
    baskets:Basket[]
    @BelongsToMany(()=>Order,()=>Order_item)
    orders:Order[]
}
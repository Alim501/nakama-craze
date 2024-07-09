import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Order } from "./orders.model";
import { Item } from "src/items/items.model";

interface Order_itemCreationAttrs{

    quantity:number;
    order_id:number;
    item_id:number;
}

@Table({tableName:'order_items'})
export class Order_item extends Model<Order_item, Order_itemCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'1',description:"Количество"})
    @Column({type:DataType.INTEGER,allowNull:false,defaultValue:1})
    quantity:number;

    @ForeignKey(()=>Order)
    @ApiProperty({example:'1',description:"ID заказа"})
    @Column({type:DataType.INTEGER,allowNull:false})
    order_id:number;

    @ForeignKey(()=>Item)
    @ApiProperty({example:'1',description:"ID предмета"})
    @Column({type:DataType.INTEGER,allowNull:true})
    item_id:number;

    @BelongsTo(() => Order)
    order: Order;

    @BelongsTo(() => Item)
    item: Item;
}
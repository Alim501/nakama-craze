import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Item } from "src/items/items.model";
import { Order_item } from "./order_item.model";
import { Promocode } from "src/promocodes/promocodes.model";
import { User } from "src/users/users.model";

interface OrderCreationAttrs{
    user_id:number;
    status:string;
    track_code:number;
    promocode_id:number;
}

@Table({tableName:'orders'})
export class Order extends Model<Order, OrderCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'1523131',description:"Трек-код"})
    @Column({type:DataType.INTEGER,allowNull:false})
    track_code:number;
    @ApiProperty({example:'готово',description:"Статус заказа"})
    @Column({type:DataType.STRING,allowNull:false})
    status:string;

    @ForeignKey(()=>User)
    @ApiProperty({example:'1',description:"ID пользователя"})
    @Column({type:DataType.INTEGER,allowNull:false})
    user_id:number;
    
    @BelongsTo(()=>User)
    user:User

    @ForeignKey(()=>Promocode)
    @ApiProperty({example:'1',description:"ID промокода"})
    @Column({type:DataType.INTEGER,allowNull:true})
    promocode_id:number;

    @BelongsTo(()=>Promocode)
    promocode:Promocode

    @BelongsToMany(()=>Item,()=>Order_item)
    items:Item[]
}
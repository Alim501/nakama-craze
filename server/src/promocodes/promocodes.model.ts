import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Order } from "src/orders/orders.model";

interface PromocodeCreationAttrs{
    code:string;
    percent:number;
    expire_at:number;
}

@Table({tableName:'promocodes'})
export class Promocode extends Model<Promocode, PromocodeCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'KZ200',description:"Код промокода"})
    @Column({type:DataType.STRING,allowNull:false})
    code:string;
    @ApiProperty({example:'10',description:"Процент скидки"})
    @Column({type:DataType.INTEGER,allowNull:false})
    percent:number;
    @ApiProperty({example:'11.11.2011',description:"Срок когда истечет"})
    @Column({type:DataType.DATE,allowNull:true})
    expire_at:number;

    @HasMany(()=>Order)
    orders:Order
}
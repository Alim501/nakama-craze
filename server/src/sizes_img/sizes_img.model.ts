import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface Size_imgCreationAttrs{
    category_id:number;
    img:string;
}

@Table({tableName:'sizes_imgs'})
export class Size_img extends Model<Size_img, Size_imgCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'1',description:"ID размера"})
    @Column({type:DataType.INTEGER,allowNull:true})
    category_id:number;
    @ApiProperty({example:'sizes/M.png',description:"Путь к файлу"})
    @Column({type:DataType.STRING,allowNull:false})
    img:string;
}
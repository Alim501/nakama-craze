import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface PrintCreationAttrs{
    img:string;
    title:string;
    category_id:number;
}

@Table({tableName:'prints'})
export class Print extends Model<Print, PrintCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'Принт Гатса',description:"Название"})
    @Column({type:DataType.STRING,allowNull:false})
    title:string;
    @ApiProperty({example:'sizes/M.png',description:"Путь к файлу"})
    @Column({type:DataType.STRING,allowNull:false})
    img:string;
    @ApiProperty({example:'1',description:"ID аниме"})
    @Column({type:DataType.INTEGER,allowNull:true})
    anime_id:number;
}
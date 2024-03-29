import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Color } from './colors.model';
import { CreateColorDto } from './dto/create-color.dto';

@Injectable()
export class ColorsService {

    constructor(@InjectModel(Color) private colorRepository:typeof Color){}
    
    async createColor(dto:CreateColorDto){
        const color=await this.colorRepository.create(dto);
        return color;
    }

    async getAllColors(){
        const colors=await this.colorRepository.findAll();
        return colors;
    }

}

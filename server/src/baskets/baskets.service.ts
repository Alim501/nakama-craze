import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './basket.model';

@Injectable()
export class BasketsService {
    constructor(@InjectModel(Basket) private basketRepository:typeof Basket){}
    
    async createBasket(user_id:number){
        return this.basketRepository.create({user_id:user_id});
    }

    async getBasketByUser(user_id:number){
        const basket=await this.basketRepository.findOne({where:{user_id:user_id}});
        const basket_items=basket.items    
        return {basket,basket_items}
        
    }
}

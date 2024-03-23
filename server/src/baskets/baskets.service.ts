import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './basket.model';
import { Basket_item } from './basket_item.model';
import { ItemsService } from 'src/items/items.service';
import { retry } from 'rxjs';

@Injectable()
export class BasketsService {
    constructor(@InjectModel(Basket) private basketRepository:typeof Basket,
                @InjectModel(Basket_item) private basketItemRepository:typeof Basket_item){}
    
    async createBasket(user_id:number){
        return this.basketRepository.create({user_id:user_id});
    }

    async getBasketByUser(user_id:number){
        const basket=await this.basketRepository.findOne({where:{user_id:user_id}});
        return this.basketItemRepository.findAll({where:{basket_id:basket.id}})
        
    }
}

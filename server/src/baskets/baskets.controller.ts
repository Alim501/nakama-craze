import {  Controller, ExecutionContext, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BasketsService } from './baskets.service';
import { Basket } from './basket.model';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { Basket_item } from './basket_item.model';
@Controller('basket')
export class BasketsController {

    constructor(private basketService:BasketsService){}

    @ApiOperation({summary:"Получение корзины пользователя"})
    @ApiResponse({status:200,type:[Basket]})
    @Get()
    @UseGuards(JwtAuthGuard) 
    getBasketByUser(@Req() req){
        return this.basketService.getBasketByUser(req.user.id);
    }
}
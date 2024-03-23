import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Order } from './orders.model';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService:OrdersService){}

    @ApiOperation({summary:"Получение заказов пользователя"})
    @ApiResponse({status:200,type:[Order]})
    @Get()
    @UseGuards(JwtAuthGuard) 
    getOrdersByUser(@Req() req){
        return this.ordersService.getOrdersByUser(req.user.id);
    }
}

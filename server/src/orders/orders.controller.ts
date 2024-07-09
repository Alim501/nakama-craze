import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Order } from './orders.model';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/auth/role.enum';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @ApiOperation({ summary: 'Получение заказов пользователя' })
  @ApiResponse({ status: 200, type: [Order] })
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getOrdersByUser(@Req() req) {
    return this.ordersService.getOrdersByUser(req.user.id);
  }
  @ApiOperation({ summary: 'Возвращение всех заказов' })
  @ApiResponse({ status: 200, type: [Order] })
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }
}

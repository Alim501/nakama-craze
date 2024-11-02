import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BasketsService } from './baskets.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { CreateItemDto } from 'src/items/dto/create-item.dto';
import { User } from 'src/auth/user.decorator';
import { Item } from 'src/items/items.model';
import { Basket } from './basket.model';
import { NUMBER } from 'sequelize';

@Controller('basket')
export class BasketsController {
  constructor(private basketService: BasketsService) {}

  @ApiOperation({ summary: 'Получение корзины пользователя' })
  @ApiResponse({ status: 200, type: [Item] })
  @Get()
  @UseGuards(JwtAuthGuard)
  getBasketUser(
    @User() user: { id: number },
  ): Promise<{ item: Item; quantity: number }[]> {
    return this.basketService.getBasketByUser(user.id);
  }

  @ApiOperation({ summary: 'Добавление продукта в корзину' })
  @ApiResponse({ status: 200, type: Item })
  @Post()
  @UseGuards(JwtAuthGuard)
  addItemToBasket(
    @User() user: { id: number },
    @Body() createItemDto: CreateItemDto & { quantity: number },
  ) {
    const { quantity, ...itemDto } = createItemDto;
    return this.basketService.addItemToBasket(itemDto, user.id, quantity);
  }

  @ApiOperation({ summary: 'Изменение количеста в корзине' })
  @ApiResponse({ status: 200, type: NUMBER })
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async editBasketItemQuantity(
    @Param('id') id: number,
    @User() user: { id: number },
    @Body('quantity') quantity: number,
  ): Promise<number> {
    return this.basketService.editBasketItemQuantity(id, user.id, quantity);
  }

  @ApiOperation({ summary: 'Удаление продукта из корзины' })
  @ApiResponse({ status: 200, type: Basket })
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteBasketItem(
    @Param('id') id: number,
    @User() user: { id: number },
  ): Promise<number> {
    return this.basketService.deleteBasketItem(id, user.id);
  }
}

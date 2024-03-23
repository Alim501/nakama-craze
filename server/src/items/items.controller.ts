import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Item } from './items.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private itemsService:ItemsService){}

    @ApiOperation({summary:"Создание готового продукта"})
    @ApiResponse({status:200,type:[Item]})
    @Post()
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    createCategory(@Body() itemDto: CreateItemDto){
      return this.itemsService.createItem(itemDto);
    }

    @ApiOperation({summary:"Возвращение всех готовых продуктов"})
    @ApiResponse({status:200,type:[Item]})
    @Post()
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    getAllItems(){
      return this.itemsService.getAllItems();
    }
}

import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { BasketsService } from 'src/baskets/baskets.service';
import { Basket } from 'src/baskets/basket.model';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}


    @ApiOperation({summary:"Получение всех пользователей"})
    @ApiResponse({status:200,type:[User]})
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard)  -для авторизованного 
    @Get()
    getAll(){
        return this.userService.getAllUsers();
    }
}

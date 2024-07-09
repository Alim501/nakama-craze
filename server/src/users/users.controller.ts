import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Получение всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  // @UseGuards(JwtAuthGuard)  -для авторизованного
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}

import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.auth.guard';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiResponse({ status: 200, type: 'token' })
  @Post('/login')
  async login(@Body() userDto: CreateUserDto): Promise<{ token: string }> {
    return this.authService.login(userDto);
  }

  @ApiResponse({ status: 200, type: 'token' })
  @Post('/registration')
  async registration(
    @Body() userDto: CreateUserDto,
  ): Promise<{ token: string }> {
    return this.authService.registration(userDto);
  }

  @ApiResponse({ status: 200, type: 'token' })
  @Get('/check')
  @UseGuards(JwtAuthGuard)
  async check(
    @Headers('Authorization') header: string,
  ): Promise<{ token: string }> {
    return this.authService.check(header);
  }
}

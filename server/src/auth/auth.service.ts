import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.model';
import * as bcrypt from 'bcryptjs';
import { BasketsService } from 'src/baskets/baskets.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private basketService: BasketsService,
  ) {}

  async login(userDto: CreateUserDto): Promise<{ token: string }> {
    const user = await this.validateUser(userDto);

    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto): Promise<{ token: string }> {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        'Пользователь с таким email существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.userService.createUser(userDto);
    await this.basketService.createBasket(user.id);
    return this.generateToken(user);
  }

  async check(header: string): Promise<{ token: string }> {
    const user = this.decodeToken(header);
    return this.generateToken(user);
  }

  private decodeToken(authorizationHeader: string): any {
    const token = authorizationHeader.split(' ')[1];
    try {
      return this.jwtService.decode(token);
    } catch (error) {
      throw new UnauthorizedException('Неверный токен');
    }
  }

  private async generateToken(user: User): Promise<{ token: string }> {
    const payload = {
      email: user.email,
      id: user.id,
      role: user.role,
      name: user.name,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: CreateUserDto): Promise<User> {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Некорректный email или пароль',
    });
  }
}

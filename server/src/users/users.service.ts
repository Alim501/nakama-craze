import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import * as bcrypt from 'bcryptjs'
import { CreateUserDto } from './dto/create-user.dto';
import { Order } from 'src/orders/orders.model';

@Injectable()
export class UsersService {
    
    constructor(@InjectModel(User) private userRepository:typeof User){}

    async createUser(dto:CreateUserDto){
        const hashPassword = await bcrypt.hash(dto.password,5);
        const user=await this.userRepository.create({...dto,password:hashPassword});
        return user;
    }

    async getAllUsers(){
        const users=await this.userRepository.findAll({include:{model:Order,attributes:['id']}});
        return users;
    }

    async getUserByEmail(email:string){
        const user=await this.userRepository.findOne({where:{email}});
        console.log(user)
        return user;
    }
}

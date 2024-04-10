import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import * as bcrypt from 'bcryptjs'
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    
    constructor(@InjectModel(User) private userRepository:typeof User){}

    async createUser(dto:CreateUserDto){
        const hashPassword = await bcrypt.hash(dto.password,5);
        const user=await this.userRepository.create({...dto,password:hashPassword});
        return user;
    }

    async getAllUsers(){
        const users=await this.userRepository.findAll();
        return users;
    }

    async getUserByEmail(email:string){
        const user=await this.userRepository.findOne({where:{email},include:{all:true}});
        return user;
    }
}

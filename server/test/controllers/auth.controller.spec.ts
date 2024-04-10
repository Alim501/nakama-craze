import { INestApplication } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Test, TestingModule } from "@nestjs/testing";
import { AuthModule } from "../../src/auth/auth.module";
import { User } from "src/users/users.model";
import { UsersModule } from "src/users/users.module";
import * as bcrypt from 'bcryptjs';
import * as request from 'supertest';
import { Basket } from "src/baskets/basket.model";

const mockedUser={
  name:'John',
  email:'john@gmail.com',
  password:'john123'
};

describe('AuthController',()=>{
  let app:INestApplication;

  beforeEach(async()=>{
    const testModule:TestingModule=await Test.createTestingModule({
      imports:[
        ConfigModule.forRoot({
          envFilePath:`.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRESS_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRESS_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [User,Basket],
          autoLoadModels:true
        
        }),
        UsersModule,
        AuthModule,
      ]
    }).compile();

    app=testModule.createNestApplication();
    await app.init();

  });

  beforeEach(async()=>{
    const user=new User();
    const hashPassword = await bcrypt.hash(mockedUser.password,5);
    user.name=mockedUser.name;
    user.password=hashPassword;
    user.email=user.email;

    return user.save();
  });

  afterEach(async ()=>{
    await User.destroy({where:{name:mockedUser.name}});
    await User.destroy({where:{name:'Test'}});
  })
  it('should create user',async()=>{
    const newUser={
      name:'Test',
      email:'Test@gmail.com',
      password:'Test123'
    };

    const response=await request(app.getHttpServer())
    .post('/registration')
    .send(newUser);

    const passwordIsValid=await bcrypt.compare(newUser.password,response.body.password)

    expect(response.body.name).toBe(newUser.name);
    expect(passwordIsValid).toBe(true);
    expect(response.body.email).toBe(newUser.email);
  })
})
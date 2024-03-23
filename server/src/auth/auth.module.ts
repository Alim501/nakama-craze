import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { BasketsModule } from 'src/baskets/baskets.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
    forwardRef(()=>BasketsModule),
    forwardRef(()=> UsersModule),
    JwtModule.register({
      secret:process.env.PRIVATE_KEY||"SERCRET",
      signOptions:{
        expiresIn:'24h'
      }
    })
  ],
  exports:[
    AuthModule,
    JwtModule,
  ]
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { PrintsService } from './prints.service';
import { PrintsController } from './prints.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Print } from './prints.model';

@Module({
  providers: [PrintsService],
  imports:[
    SequelizeModule.forFeature([Print]),
  ],
  controllers: [PrintsController]
})
export class PrintsModule {}

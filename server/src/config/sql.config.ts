import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize';

export const sqlConfig = registerAs('database', () => ({
  dialect: <Dialect>process.env.SQL_DIALECT || 'postgres',
  logging: process.env.SQL_LOGGING === 'true' ? true : false,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRESS_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRESS_PASSWORD,
  database: process.env.POSTGRES_DB,
  autoLoadModels:true,
  synchronize:true
}));
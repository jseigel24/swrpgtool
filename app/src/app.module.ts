import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { CareerModule } from './career/career.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: '192.168.0.109',
    port: 5432,
    username: 'swrpg',
    password: 'swrpg',
    database: 'swrpg',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }),
    CareerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

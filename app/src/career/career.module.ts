import { Module } from '@nestjs/common';
import { CareerService } from './career.service';
import { CareerController } from './career.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Career } from './entities/career.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Career])],
  providers: [CareerService],
  controllers: [CareerController]
})
export class CareerModule {}

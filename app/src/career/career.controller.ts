import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CareerService } from './career.service';
import { Career } from './entities/career.entity';

@Controller('career')
export class CareerController {
    constructor(private readonly careerService: CareerService) {}
    
    
    @Post()
    async create(@Body() careerObj:Career): Promise<Career> {
      return await this.careerService.newCareer();
    };

    @Get()
    async read(): Promise<Career> {
      return await this.careerService.getCareer();
    };

    @Put()
    async update(@Body() careerObj:Career): Promise<Career> {
      return this.careerService.updateCareer();
    };

    @Delete()
    async delete(@Body() careerObj:Career): Promise<Number> {
      return this.careerService.deleteCareer();
    };
}

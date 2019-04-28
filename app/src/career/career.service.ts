import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Career } from './entities/career.entity'

@Injectable()
export class CareerService {
    constructor(
        @InjectRepository(Career)
        private readonly careerRepository: Repository<Career>,
    ) { }


    async newCareer(): Promise<Career> {
        return new Promise(async function (resolve, reject) {
            let controller = this;
            let career = new Career();
            career.description = "fancy descriptionff";
            career.name = "smuggler";
            resolve(controller.careerRepository.save(career));
        });
    }

    async getCareer(): Promise<Career> {
        let controller = this;
        return new Promise(async function (resolve, reject) {
            let career = new Career();
            career.id = 1;
            career.description = "fancy descriptionff";
            career.name = "smuggler";
            resolve(controller.careerRepository.save(career));
        });
    }

    async updateCareer(): Promise<Career> {
        let controller = this;
        return new Promise(async function (resolve, reject) {
            let career = new Career();
            career.id = 1;
            career.description = "fancy descriptionff";
            career.name = "smuggler";
            resolve(controller.careerRepository.save(career));
        });
    }

    async deleteCareer(): Promise<Number> {
        let controller = this;
        return new Promise(async function (resolve, reject) {
            let career = new Career();
            career.id = 2;
            let delResult = await controller.careerRepository.delete(career);
            resolve(delResult.affected);
        });
    }
}

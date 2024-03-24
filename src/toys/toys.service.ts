import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Toys } from './toys.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ToysService {

  constructor(
    @InjectRepository(Toys)
    private readonly toyRepo: Repository<Toys>,
  ) {}
    
    async getAllToys(): Promise<Toys[]> {
    return await this.toyRepo.find();
    }

    // async getToyById(id: number): Promise<Toys> {
    // return await this.toyRepository.findOne(id);
    // }

    async createToy(toyData: Partial<Toys>): Promise<Toys> {
        const toy = this.toyRepo.create(toyData);
        return await this.toyRepo.save(toy);
    }

    // async updateToy(id: number, toyData: Partial<Toys>): Promise<Toys> {
    //     await this.toyRepository.update(id, toyData);
    //     return await this.getToyById(id);
    // }

    // async deleteToy(id: number): Promise<void> {
    // await this.toyRepository.delete(id);
    // }

    async getToyById(id: number): Promise<Toys> {
      const toy = await this.toyRepo.findOne({where: {id:id}});
      if (!toy) {
        throw new Error(`Toy with ID ${id} not found`);
      }
      return toy;
    }


    async getToysByUserId(userId: number): Promise<Toys[]> {
      const toys = await this.toyRepo.find({ where: { userId: userId } });
      if (!toys || toys.length === 0) {
        throw new NotFoundException(`Toys for user with ID ${userId} not found`);
      }
      return toys;
    }

    async removeToyById(id: number): Promise<void> {
      console.log("Dlete req", id);
      const toyToRemove = await this.getToyById(id); // Fetch the toy to remove
      await this.toyRepo.remove(toyToRemove); // Remove the toy
    }
}
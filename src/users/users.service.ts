import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  async removeUserById(id: number) {
        
    }

    // create(body){
    //     return this.usersRepo.create(body);
    // }

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}
    
      async createUser(user: Partial<User>): Promise<User> {
        return await this.userRepository.save(user);
      }
    
      async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
      }

      async checkUser(email, password): Promise<User | null> {
        const user = await this.userRepository.findOne({ where: {email, password} });
        return user || null;
      }
    

}

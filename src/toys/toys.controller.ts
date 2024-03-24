import { Controller, Delete, NotFoundException, Param } from '@nestjs/common';
import { Get, Post } from '@nestjs/common';
import { Toys } from './toys.entity';
import { ToysService } from './toys.service';
import { Body } from '@nestjs/common';

@Controller('toys')
export class ToysController {
    
    constructor(private toyService: ToysService){}

    @Get()
    async getAllToys(): Promise<Toys[]> {
      return await this.toyService.getAllToys();
    }

    @Post()
    async createToy(@Body() toyData: Partial<Toys>): Promise<Toys> {
      return await this.toyService.createToy(toyData);
    }

    @Get(':id')
    async getToyById(@Param('id') id: string): Promise<Toys> {
      return await this.toyService.getToyById(parseInt(id, 10));
    }

    @Get('user/:userId')
    async getProductsByUserId(@Param('userId') userId: number): Promise<Toys[]> {
      const products = await this.toyService.getToysByUserId(userId);
      if (!products || products.length === 0) {
        throw new NotFoundException(`No products found for user with ID ${userId}`);
      }
    return products;
  }

  @Delete('delete/:id')
  async removeProductById(@Param('id') id: number) {
    console.log("Delete request received")

    // Implement your logic to remove product by ID
    await this.toyService.removeToyById(id);
    console.log("Delete product")
    return { message: 'Product removed successfully' };
  }

}

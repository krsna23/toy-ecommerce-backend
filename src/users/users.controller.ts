import { Controller, Delete, HttpStatus, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Post, Get } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { User } from './users.entity';


@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Post()
    async createUser(@Body() userData: Partial<User>): Promise<User> {
        return await this.userService.createUser(userData);
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    // @Post('login')
  // async login(@Body('email') email: string, @Body('password') password: string) {
  //   const user = await this.userService.checkUser(email, password);
  //   if (!user) {
  //     return { statusCode: HttpStatus.UNAUTHORIZED, message: 'Invalid credentials' };
  //   }
  //   // Here you can generate a token or any other authentication mechanism
  //   return { statusCode: HttpStatus.OK, message: 'Login successful', user };
  // }}

  @Post('login')
  async login(@Body() userData: { email: string, password: string }) {
      const { email, password } = userData;
      const user = await this.userService.checkUser(email, password);
      if (!user) {
          // If user is not found or credentials are invalid
          return { statusCode: HttpStatus.UNAUTHORIZED };
      }
      // If login is successful
      return { statusCode: HttpStatus.OK,  userId: user.id, userName: user.email  };
  }

  @Delete('delete/:id')
  async removeProductById(@Param('id') id: number) {
    console.log("Delete request received")

    // Implement your logic to remove product by ID
    await this.userService.removeUserById(id);
    console.log("Delete product")
    return { message: 'Product removed successfully' };
  }
  
}
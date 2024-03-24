import { Controller, Get } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';



@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Hello, World!';
  }

  // @Post('/signup')
  // createUser(@Body() body: CreateUserDto){
  //   return this.usersService.create(body);
  // }

  // @Post('/login')
  // verifyUser(@Body() body){
  //   return this.usersService.create(body);
  // }

}

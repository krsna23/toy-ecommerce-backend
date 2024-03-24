import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ToysModule } from './toys/toys.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { Toys } from './toys/toys.entity';


@Module({
  imports: [UsersModule, ToysModule, TypeOrmModule.forRoot({
    type: 'sqlite',
		database: 'db.sqlite',
		entities: [User, Toys], 
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {


}
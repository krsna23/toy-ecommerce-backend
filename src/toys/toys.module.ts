import { Module } from '@nestjs/common';
import { ToysService } from './toys.service';
import { ToysController } from './toys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Toys } from './toys.entity';


@Module({
  providers: [ToysService],
  controllers: [ToysController],
  imports: [TypeOrmModule.forFeature([Toys])]
})
export class ToysModule {}

import { IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    password: string;

    @IsString()
    number: string;
}
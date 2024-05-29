import { IsEnum, IsNumber, IsString } from 'class-validator';

export enum ROLE_ENUM {
    BRAND = 2,
    LOGISTIC = 1,
}

export class CreateUser {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsNumber()
    @IsEnum(ROLE_ENUM)
    role: ROLE_ENUM;
}

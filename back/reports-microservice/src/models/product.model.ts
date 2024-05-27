import { IsString, IsNumber } from 'class-validator';

export class CreateProduct {
    @IsString()
    reference: string;

    @IsString()
    description: string;

    @IsNumber()
    brandId: number;

    @IsNumber()
    categoryId: number;
}

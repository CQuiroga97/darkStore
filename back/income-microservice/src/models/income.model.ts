import {
    IsString,
    IsNumber,
    IsDateString,
    ValidateNested,
    IsArray,
    ArrayNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateIncome {
    @IsDateString()
    incomeDate: string;

    @IsString()
    incomeCode: string;

    @IsNumber()
    brandId: number;

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => CreateIncomeDetail)
    incomeDetails?: CreateIncomeDetail[];
}

export class CreateIncomeDetail {
    @IsNumber()
    productId: number;

    @IsNumber()
    quantity: number;

    incomeId?: number;

    incomeDate?: string;
}

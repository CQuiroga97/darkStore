import { Request, Response } from 'express';
import { IncomeService } from '../services/income.service';
import { handleError } from '../utilities/error.utilities';
import {
    CreateIncomeMapper,
    UpdateIncomeMapper,
} from '../mappers/income.mapper';
import { validateOrReject } from 'class-validator';
import { BrandService } from '../services/brand.service';
import { ERROR } from '../utilities/messages.utilities';

export class IncomeController {
    constructor(
        private readonly service: IncomeService,
        private readonly brandService: BrandService,
    ) {}

    Get = async ({}: Request, res: Response) => {
        try {
            const incomes = await this.service.getIncomes();
            return res.status(200).json({ status: 'success', data: incomes });
        } catch (error) {
            return handleError(error, res);
        }
    };

    Create = async ({ body }: Request, res: Response) => {
        const income = CreateIncomeMapper(body);
        try {
            if (!(await this.brandService.findByID(income.brandId)))
                throw new Error(
                    ERROR.RESOURCE_NOT_FOUND.replace('{resource}', 'Brand'),
                );
            await validateOrReject(income);
            const newIncome = await this.service.createIncome(income);
            return res.status(201).json({ status: 'success', data: newIncome });
        } catch (error) {
            return handleError(error, res);
        }
    };

    Update = async ({ body, params }: Request, res: Response) => {
        const income = UpdateIncomeMapper(body);
        try {
            if (
                income.brandId &&
                !(await this.brandService.findByID(income.brandId))
            )
                throw new Error(
                    ERROR.RESOURCE_NOT_FOUND.replace('%s', 'Brand'),
                );

            const updatedIncome = await this.service.updateIncome({
                ...income,
                id: +params.id,
            });
            return res
                .status(200)
                .json({ status: 'success', data: updatedIncome });
        } catch (error) {
            return handleError(error, res);
        }
    };
}

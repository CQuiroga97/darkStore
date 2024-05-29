import { CreateIncome } from '../models/income.model';

export const CreateIncomeMapper = (body: any): CreateIncome => {
    if (!body) throw new Error('Body is required');
    if (typeof body !== 'object') throw new Error('Body must be an object');

    const { incomeDate, incomeCode, brandId, incomeDetails } = body;

    const income = new CreateIncome();
    income.brandId = brandId;
    income.incomeCode = incomeCode;
    income.incomeDate = incomeDate;
    income.incomeDetails = incomeDetails;
    return income;
};

export const UpdateIncomeMapper = (body: any): Partial<CreateIncome> => {
    if (!body) throw new Error('Body is required');
    if (typeof body !== 'object') throw new Error('Body must be an object');

    const { incomeDate, incomeCode, brandId } = body;
    const income: Partial<CreateIncome> = {};
    if (incomeDate) income.incomeDate = incomeDate;
    if (incomeCode) income.incomeCode = incomeCode;
    if (brandId) income.brandId = brandId;
    return income;
};

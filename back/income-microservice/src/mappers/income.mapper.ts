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

// export const UpdateProductMapper = (body: any): Partial<CreateProduct> => {
//     if (!body) throw new Error('Body is required');
//     if (typeof body !== 'object') throw new Error('Body must be an object');
//
//     const { reference, description, brandId, categoryId } = body;
//     const product: Partial<CreateProduct> = {};
//     if (reference) product.reference = reference;
//     if (description) product.description = description;
//     if (brandId) product.brandId = brandId;
//     if (categoryId) product.categoryId = categoryId;
//     return product;
// };

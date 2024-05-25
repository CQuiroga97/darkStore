import { CreateProduct } from '../models/product.model';

export const CreateProductMapper = (body: any): CreateProduct => {
    if (!body) throw new Error('Body is required');
    if (typeof body !== 'object') throw new Error('Body must be an object');

    const { reference, description, brandId, categoryId } = body;
    const product = new CreateProduct();
    product.reference = reference;
    product.description = description;
    product.brandId = brandId;
    product.categoryId = categoryId;
    return product;
};

export const UpdateProductMapper = (body: any): Partial<CreateProduct> => {
    if (!body) throw new Error('Body is required');
    if (typeof body !== 'object') throw new Error('Body must be an object');

    const { reference, description, brandId, categoryId } = body;
    const product: Partial<CreateProduct> = {};
    if (reference) product.reference = reference;
    if (description) product.description = description;
    if (brandId) product.brandId = brandId;
    if (categoryId) product.categoryId = categoryId;
    return product;
};

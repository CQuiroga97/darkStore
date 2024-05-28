import { DataSource, Repository } from 'typeorm';
import { InventoryProduct } from '../entities/inventory-product.entity';
import { ReportInventoryProductFilter } from '../models/filter.model';

export class InventoryProductRepository {
    private readonly repository: Repository<InventoryProduct>;

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(InventoryProduct);
    }

    public getReport(filters: ReportInventoryProductFilter): Promise<any[]> {
        const query = this.repository.createQueryBuilder('inventoryProduct');
        if (filters.brand)
            query.where('UPPER(brand.name) = :brand', {
                brand: filters.brand.toUpperCase(),
            });
        query
            .select([
                'SUM(inventoryProduct.quantity) as quantity',
                'inventory.rack as rack',
                'inventory.column as column',
                'inventory.level as level',
                'product.reference as reference',
                'product.description as description',
                'brand.name as brand',
                'category.name as category',
            ])
            .innerJoin('inventoryProduct.inventory', 'inventory')
            .innerJoin('inventoryProduct.product', 'product')
            .innerJoin('product.category', 'category')
            .leftJoin('product.brand', 'brand')
            .groupBy(
                'inventory.rack, inventory.column, inventory.level, product.reference, product.description, brand.name, category.name',
            );

        return query.getRawMany();
    }
}

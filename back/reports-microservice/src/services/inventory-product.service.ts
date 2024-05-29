import { InventoryProductRepository } from '../repositories/inventory-product.repository';
import { InventoryProduct } from '../entities/inventory-product.entity';
import { ReportInventoryProductFilter } from '../models/filter.model';

export interface IInventoryProductService {
    getReport(
        filters: ReportInventoryProductFilter,
    ): Promise<InventoryProduct[] | string>;
}

export class InventoryProductService implements IInventoryProductService {
    constructor(private readonly repository: InventoryProductRepository) {}

    public getReport(
        filters: ReportInventoryProductFilter,
    ): Promise<InventoryProduct[]> {
        return this.repository.getReport(filters);
    }
}
interface InventoryProductReport {
    quantity: string;
    rack: string;
    column: string;
    level: string;
    reference: string;
    description: string;
    brand: string;
    category: string;
}

export class InventoryProductServiceCsv implements IInventoryProductService {
    constructor(private readonly repository: InventoryProductRepository) {}

    public async getReport(
        filters: ReportInventoryProductFilter,
    ): Promise<string> {
        const products = (await this.repository.getReport(
            filters,
        )) as InventoryProductReport[];
        return this.toCsv(products);
    }
    private toCsv(inventories: InventoryProductReport[]): string {
        const header =
            'MARCA,UBICACION, PRODUCTO, DESCRIPCION, CATEGORIA, CANTIDAD\n';
        const body = inventories.map((inventory: InventoryProductReport) => {
            return `${inventory.brand},${inventory.rack}-${inventory.column}-${inventory.level},${inventory.reference},${inventory.description},${inventory.category},${inventory.quantity}\n`;
        });
        return header + body.join('');
    }
}

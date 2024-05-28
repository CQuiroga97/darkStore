import { postgresConfig } from '../config/postgres';
import { InventoryProductRepository } from '../repositories/inventory-product.repository';
import {
    IInventoryProductService,
    InventoryProductService,
    InventoryProductServiceCsv,
} from '../services/inventory-product.service';
import { REPORT_TYPE } from './income-report.factory';

export const InventoryProductReportFactory = (
    reportType: REPORT_TYPE,
): IInventoryProductService => {
    const repository = new InventoryProductRepository(postgresConfig);
    switch (reportType) {
        case 'CSV':
            return new InventoryProductServiceCsv(repository);
        case 'JSON':
            return new InventoryProductService(repository);
        default:
            throw new Error('Invalid report type');
    }
};

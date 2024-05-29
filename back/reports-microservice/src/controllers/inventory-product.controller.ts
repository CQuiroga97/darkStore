import { Request, Response } from 'express';
import { REPORT_TYPE } from '../factories/income-report.factory';
import { handleSuccess } from '../utilities/response.utilities';
import { InventoryProduct } from '../entities/inventory-product.entity';
import { handleError } from '../utilities/error.utilities';
import { InventoryProductReportFactory } from '../factories/inventory-product-report.factory';
import { IInventoryProductService } from '../services/inventory-product.service';
import { ReportInventoryProductFilter } from '../models/filter.model';

export class InventoryProductController {
    constructor() {}

    GetReport = async (req: Request, res: Response) => {
        try {
            if (!req.query.reportType)
                throw new Error('reportType is required');
            const instance: IInventoryProductService =
                InventoryProductReportFactory(
                    req.query.reportType as REPORT_TYPE,
                );
            const report = await instance.getReport(
                req.query as ReportInventoryProductFilter,
            );
            handleSuccess<InventoryProduct[] | string>(
                report,
                req.query.reportType as REPORT_TYPE,
                res,
            );
        } catch (error) {
            handleError(error, res);
        }
    };
}

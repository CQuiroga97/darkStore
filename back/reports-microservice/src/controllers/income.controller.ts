import { Request, Response } from 'express';
import { handleError } from '../utilities/error.utilities';
import { IIncomeService } from '../services/income.service';
import {
    IncomeReportFactory,
    REPORT_TYPE,
} from '../factories/income-report.factory';
import { handleSuccess } from '../utilities/response.utilities';
import { Income } from '../entities/income.entity';

export class IncomeController {
    constructor() {}

    GetReport = async (req: Request, res: Response) => {
        try {
            if (!req.query.reportType)
                throw new Error('reportType is required');

            const filters = req.query;
            const instance: IIncomeService = IncomeReportFactory(
                req.query.reportType as REPORT_TYPE,
            );
            const report = await instance.getReport(filters);
            handleSuccess<Income[] | string>(
                report,
                req.query.reportType as REPORT_TYPE,
                res,
            );
        } catch (error) {
            handleError(error, res);
        }
    };
}

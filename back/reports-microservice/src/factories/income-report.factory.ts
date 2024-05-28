import { postgresConfig } from '../config/postgres';
import { IncomeRepository } from '../repositories/income.repository';
import {
    IIncomeService,
    IncomeService,
    IncomeServiceCsv,
} from '../services/income.service';

export type REPORT_TYPE = 'CSV' | 'JSON';

export const IncomeReportFactory = (
    reportType: REPORT_TYPE,
): IIncomeService => {
    const repository = new IncomeRepository(postgresConfig);
    switch (reportType) {
        case 'CSV':
            return new IncomeServiceCsv(repository);
        case 'JSON':
            return new IncomeService(repository);
        default:
            throw new Error('reportType not supported');
    }
};

import { IncomeDetail } from '../entities/details-income.entity';
import { Income } from '../entities/income.entity';
import { ReportIncomeFilter } from '../models/filter.model';
import { IncomeRepository } from '../repositories/income.repository';
import { getToday, getYesterday } from '../utilities/date.utilities';

export interface IIncomeService {
    getReport(filters: ReportIncomeFilter): Promise<Income[] | string>;
}

export class IncomeService implements IIncomeService {
    constructor(private readonly incomeRepository: IncomeRepository) {
        this.incomeRepository = incomeRepository;
    }

    async getReport(filters: ReportIncomeFilter) {
        filters.startDate = filters.startDate || getYesterday();
        filters.endDate = filters.endDate || getToday();
        return this.incomeRepository.getReport(filters);
    }
}

export class IncomeServiceCsv implements IIncomeService {
    constructor(private readonly repository: IncomeRepository) {}

    async getReport(filters: ReportIncomeFilter) {
        filters.startDate = filters.startDate || getYesterday();
        filters.endDate = filters.endDate || getToday();

        const incomes = await this.repository.getReport(filters);
        return this.toCsv(incomes);
    }

    private toCsv(incomes: Income[]) {
        const header = 'ID,FECHA,CODIGO,ESTADO,MARCA,PRODUCTO,CANTIDAD\n';
        const body = incomes.map((income: Income) => {
            return income.incomeDetails
                .map((detail: IncomeDetail) => {
                    const text = `${income.id},${income.incomeDate},${income.incomeCode},${income.status},${income?.brand.name},${detail?.product.reference},${detail.quantity}`;
                    return text + '\n';
                })
                .join('');
        });
        return header + body.join('');
    }
}

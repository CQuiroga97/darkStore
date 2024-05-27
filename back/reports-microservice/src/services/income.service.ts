import { ReportIncomeFilter } from '../models/filter.model';
import { IncomeRepository } from '../repositories/income.repository';
import { getToday, getYesterday } from '../utilities/date.utilities';

export class IncomeService {
    constructor(private readonly incomeRepository: IncomeRepository) {
        this.incomeRepository = incomeRepository;
    }

    async getReport(filters: ReportIncomeFilter) {
        filters.startDate = filters.startDate || getYesterday();
        filters.endDate = filters.endDate || getToday();
        return this.incomeRepository.getReport(filters);
    }
}

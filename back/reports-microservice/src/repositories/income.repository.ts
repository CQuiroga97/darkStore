import { Between, DataSource, FindOperator, Repository } from 'typeorm';
import { Income } from '../entities/income.entity';
import { ReportIncomeFilter } from '../models/filter.model';

export class IncomeRepository {
    private readonly repository: Repository<Income>;

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(Income);
    }

    public getReport(filters: ReportIncomeFilter): Promise<Income[]> {
        const where: any = {};
        where.incomeDate = Between(filters.startDate, filters.endDate);
        if (filters.status) where.status = filters.status;
        if (filters.brandId) where.brandId = filters.brandId;

        return this.repository.find({
            where,
            order: { incomeDate: 'ASC' },
            relations: ['brand', 'incomeDetails', 'incomeDetails.product'],
        });
    }
}

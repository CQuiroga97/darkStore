import { Income } from '../entities/income.entity';
import { CreateIncome } from '../models/income.model';
import { IncomeDetailRepository } from '../repositories/income-detail.repository';
import { IncomeRepository } from '../repositories/income.repository';
import { getToday } from '../utilities/date.utilities';

export class IncomeService {
    constructor(
        private readonly repository: IncomeRepository,
        private readonly detailRepository: IncomeDetailRepository,
    ) {}

    async getIncomes() {
        return this.repository.getIncomes();
    }

    async createIncome(income: CreateIncome): Promise<Income> {
        const { incomeDetails, ...incomeData } = income;
        const newIncome = await this.repository.createIncome(incomeData);
        if (incomeDetails) {
            for (const detail of incomeDetails) {
                await this.detailRepository.createDeteail({
                    ...detail,
                    incomeDate: getToday(),
                    incomeId: newIncome.id,
                });
            }
        }
        console.log(newIncome);
        return newIncome;
    }

    async updateIncome(
        income: Partial<CreateIncome> & { id: number },
    ): Promise<Income> {
        return this.repository.updateIncome(income);
    }
}

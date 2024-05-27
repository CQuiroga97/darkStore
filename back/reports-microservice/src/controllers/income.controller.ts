import { Request, Response } from 'express';
import { handleError } from '../utilities/error.utilities';
import { IncomeService } from '../services/income.service';

export class IncomeController {
    constructor(private readonly service: IncomeService) {}

    GetReport = async (req: Request, res: Response) => {
        try {
            const filters = req.query;
            const report = await this.service.getReport(filters);
            return res.status(200).json({ status: 'success', data: report });
        } catch (error) {
            handleError(error, res);
        }
    };
}

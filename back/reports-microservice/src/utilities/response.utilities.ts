import { Response } from 'express';

type TYPE_RESPONSE = 'JSON' | 'CSV';
export function handleSuccess<T>(data: T, type: TYPE_RESPONSE, res: Response) {
    switch (type) {
        case 'JSON':
            return res.status(200).json({ status: 'success', data });
        case 'CSV':
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader(
                'Content-Disposition',
                `attachment; filename="report.csv"`,
            );
            return res.status(200).send(data);
    }
}

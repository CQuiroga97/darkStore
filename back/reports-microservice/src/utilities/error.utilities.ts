import { Response } from 'express';
import { ERROR } from './messages.utilities';
import { ValidationError } from 'class-validator';

export const handleError = (error: any, res: Response) => {
    if (error instanceof Error) {
        return res
            .status(400)
            .json({ status: 'error', message: error.message });
    }
    if (error instanceof Array && error[0] instanceof ValidationError) {
        const errors: unknown[] | undefined = [];
        error.forEach((e: ValidationError) => {
            errors.push(e.constraints);
        });
        return res.status(400).json({ message: errors });
    }

    return res.status(400).json({
        status: 'error',
        message: ERROR.UNKNOWN,
    });
};

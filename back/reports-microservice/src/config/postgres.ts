import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Product } from '../entities/product.entity';
import { Brand } from '../entities/brand.entity';
import { DispatchDetail } from '../entities/details-dispatch.entity';
import { IncomeDetail } from '../entities/details-income.entity';
import { Income } from '../entities/income.entity';
import { Dispatch } from '../entities/dispatch.entity';
import { Category } from '../entities/category.entity';

export const postgresConfig = new DataSource({
    type: 'postgres',
    host: process.env.DB_URL,
    ssl: false,
    port: (process.env.DB_PORT as number | undefined) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        Product,
        Brand,
        DispatchDetail,
        IncomeDetail,
        Income,
        Dispatch,
        Category,
    ],
    logging: true,
    synchronize: false,
});

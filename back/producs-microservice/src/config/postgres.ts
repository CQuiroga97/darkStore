import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Product } from '../../entities/product.entity';
import { Brand } from '../../entities/brand.entity';
import { Category } from '../../entities/category.entity';

console.log('DB_URL', process.env.DB_URL);
export const postgresConfig = new DataSource({
    type: 'postgres',
    host: process.env.DB_URL,
    ssl: false,
    port: (process.env.DB_PORT as number | undefined) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Product, Brand, Category],
    logging: true,
    synchronize: false,
});

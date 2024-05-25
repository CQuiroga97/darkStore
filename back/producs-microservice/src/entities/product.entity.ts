import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Brand } from './brand.entity';
import { Category } from './category.entity';

@Entity('productos')
export class Product {
    @PrimaryGeneratedColumn({ name: 'id_producto' })
    id: number;

    @Column({ name: 'referencia' })
    reference: string;

    @Column({ name: 'descripcion' })
    description: string;

    @Column({ name: 'marca_id' })
    brandId: number;

    @Column({ name: 'categoria_producto_id' })
    categoryId: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'fecha_actualizacion' })
    updatedAt: Date;

    //relationships
    @ManyToOne(() => Brand, (brand) => brand.products)
    @JoinColumn({ name: 'marca_id' })
    brand: Brand;

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: 'categoria_producto_id' })
    category: Category;
}

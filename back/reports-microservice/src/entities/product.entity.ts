import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { Brand } from './brand.entity';
import { Category } from './category.entity';
import { Income } from './income.entity';
import { IncomeDetail } from './details-income.entity';
import { DispatchDetail } from './details-dispatch.entity';
import { InventoryProduct } from './inventory-product.entity';

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
    @ManyToOne(() => Brand, (brand: Brand) => brand.products)
    @JoinColumn({ name: 'marca_id' })
    brand: Brand;

    @ManyToOne(() => Category, (category: Category) => category.products)
    @JoinColumn({ name: 'categoria_producto_id' })
    category: Category;

    // @OneToMany(
    //     () => IncomeDetail,
    //     (incomeDetail: IncomeDetail) => incomeDetail.product,
    // )
    // @JoinColumn({ name: 'producto_id' })
    // incomeDetails: IncomeDetail[];

    @OneToMany(
        () => DispatchDetail,
        (dispatchDetail: DispatchDetail) => dispatchDetail.product,
    )
    dispatchDetails: DispatchDetail[];

    @OneToMany(
        () => InventoryProduct,
        (inventoryProduct: InventoryProduct) => inventoryProduct.product,
    )
    inventoryProducts: InventoryProduct[];
}

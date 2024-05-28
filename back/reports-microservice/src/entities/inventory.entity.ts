import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InventoryProduct } from './inventory-product.entity';

@Entity({ name: 'ubicaciones' })
export class Inventory {
    @PrimaryGeneratedColumn({ name: 'id_ubicacion' })
    id: number;

    @Column({ name: 'estan' })
    rack: string;

    @Column({ name: 'columna' })
    column: string;

    @Column({ name: 'nivel' })
    level: string;

    @Column({ name: 'categoria_producto_id' })
    categoryProductId: number;

    @OneToMany(
        () => InventoryProduct,
        (inventoryProduct: InventoryProduct) => inventoryProduct.inventory,
    )
    inventoryProducts: InventoryProduct[];
}

import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Inventory } from './inventory.entity';
import { Product } from './product.entity';

@Entity({ name: 'ubicacion_productos' })
export class InventoryProduct {
    @PrimaryGeneratedColumn({ name: 'id_ubicacion_producto' })
    id: number;

    @Column({ name: 'ubicacion_id' })
    inventoryId: number;

    @Column({ name: 'producto_id' })
    productId: number;

    @Column({ name: 'cantidad' })
    quantity: number;

    @ManyToOne(
        () => Inventory,
        (inventory: Inventory) => inventory.inventoryProducts,
    )
    @JoinColumn({ name: 'ubicacion_id' })
    inventory: Inventory;

    @ManyToOne(() => Product, (product: Product) => product.inventoryProducts)
    @JoinColumn({ name: 'producto_id' })
    product: Product;
}

import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm"

@Entity('products')
export class ProductEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'nvarchar' })
    name: string;

    @Column({ type: 'decimal' })
    price: number;

    @Column({ type: 'int' })
    @Column()
    quantity: number;

    @Column({ type: 'datetime' })
    @Column()
    lastUpdate: Date;

    @BeforeInsert()
    @BeforeUpdate()
    setUpdateTime() {
        this.lastUpdate = new Date();
    }

}
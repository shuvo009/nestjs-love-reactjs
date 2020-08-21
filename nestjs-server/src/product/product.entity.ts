import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm"

@Entity('products')
export class ProductEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'money' })
    price: number;

    @Column({ type: 'integer' })
    @Column()
    quantity: number;

    @Column({ type: 'date' })
    @Column()
    lastUpdate: Date;

    @BeforeInsert()
    @BeforeUpdate()
    setUpdateTime() {
        this.lastUpdate = new Date();
    }

}
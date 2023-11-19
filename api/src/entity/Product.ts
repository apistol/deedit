import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("products")
export class Product {

    @PrimaryGeneratedColumn()
    _id: number

    @Column()
    title: string

    @Column()
    imageUrl: string

    @Column()
    description: string

    @Column()
    price: string

}

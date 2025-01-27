import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from './product.entity.js'

@Entity('company')
export class Company {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  headquarter: string

  @OneToMany(() => Product, (product) => product.company)
  products: Product[]
}

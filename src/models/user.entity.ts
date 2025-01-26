import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  userName: string
  @Column()
  password: string
  @Column({ type: 'boolean', default: true })
  isActive: boolean
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('course')
export class Course {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  enrollment: Date

  @Column()
    expiryDate: Date
    
}

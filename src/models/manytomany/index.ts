import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Course } from './course.js'

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  fullName: string

  @Column()
  age: number

  @Column()
  email: string

  @ManyToMany(() => Course, { cascade: true, eager: true ,onDelete:'CASCADE'})
  @JoinTable({ name: 'enrollment' })
  course: Course[]
}

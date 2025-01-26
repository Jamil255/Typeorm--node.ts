import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Profile } from './profile.entity.js'

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

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile
}

import { DataSource } from 'typeorm'
import { User } from '../models/user.entity.js'
import dotenv from 'dotenv'
import { Profile } from '../models/profile.entity.js'
dotenv.config()
const isProd = process.env.NODE_ENV === 'producation'

const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.PORT || '5432', 10),
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [User,Profile],
  synchronize: !isProd,
  logging: !isProd,
})

export default appDataSource

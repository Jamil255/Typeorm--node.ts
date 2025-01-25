import { DataSource } from 'typeorm'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  try {
    let appSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    })

      const res = await appSource.initialize()
    console.log('Database connected', res.driver.database)
  } catch (error) {
    console.log(error)
  }
}

export default connectDB

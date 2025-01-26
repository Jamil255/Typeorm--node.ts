import { DataSource } from 'typeorm'
import appDataSource from '../constants/index.js'
const connectDB = async () => {
  try {
    const res = await appDataSource.initialize()
    console.log('Database connected', res.driver.database)
  } catch (error) {
    console.log(error)
  }
}

export default connectDB

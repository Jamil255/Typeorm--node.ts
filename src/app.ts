import express from 'express'
import connectDB from './config/db.js'
import "reflect-metadata"
const app = express()

const PORT = 3000
connectDB()
app.get('/', (req, res) => {
  res.send('welcome')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

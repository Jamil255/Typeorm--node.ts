import express from 'express'
import connectDB from './config/db.js'
import 'reflect-metadata'
import userRoute from './routes/index.js'
import cookiesParser from 'cookie-parser'
import apiRouter from "./routes/many.js"
const app = express()

const PORT = 3000
connectDB()

app.use(express.json())
app.use(cookiesParser())
app.use(userRoute)
app.use(apiRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

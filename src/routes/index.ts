import express, { Router } from 'express'
import {
  getAllRecordsController,
  loginController,
  signUpController,
} from '../controllers/auth.controller.js'
const app: Router = express.Router()

app.get('/users', getAllRecordsController)
app.post('/register', signUpController)
app.post('/login', loginController)

export default app

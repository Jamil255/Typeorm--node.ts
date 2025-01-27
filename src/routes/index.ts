import express, { Router } from 'express'
import {
    getAllRecordsController,
    loginController,
    signUpController,
} from '../controllers/auth.controller.js'
import { oneToManyRel } from '../controllers/userController.js'
const app: Router = express.Router()

app.get('/users', getAllRecordsController)
app.post('/register', signUpController)
app.post('/login', loginController)



app.get('/profile',oneToManyRel)

export default app

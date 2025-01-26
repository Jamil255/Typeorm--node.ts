import { Request, Response } from 'express'
import appDataSource from '../constants/index.js'
import { User } from '../models/user.entity.js'
import bcrypt, { hash, compare } from 'bcrypt'
const userRepo = appDataSource.getRepository(User)

const getAllRecordsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const allRecords = await userRepo.find()

    return res.status(200).json({
      message: 'All records fetched successfully',
      allRecords,
    })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, password } = req.body
    if (!userName || !password)
      return res
        .status(400)
        .json({ message: 'Please provide both username and password' })
    const user = await userRepo.findOne({ where: { userName } })
    if (!user) return res.status(400).json({ message: 'User not found' })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid credentials' })

    return res.status(200).json({ message: 'Login successful', user })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const signUpController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, password } = req.body
    if (!userName || !password)
      return res
        .status(400)
        .json({ message: 'Please provide both username and password' })
    const user = await userRepo.findOne({ where: { userName } })
    if (user !== null)
      return res.status(400).json({ message: 'User already exists' })

    const hashPass = await bcrypt.hash(password, 10)
    const newUser = new User()
    newUser.userName = userName
    newUser.password = hashPass
    await userRepo.save(newUser)

    return res.status(200).json({ message: 'signup successful', newUser })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

export { getAllRecordsController, signUpController, loginController }

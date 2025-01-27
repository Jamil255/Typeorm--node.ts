import { Request, Response } from 'express'
import appDataSource from '../constants/index.js'
import { Profile } from '../models/profile.entity.js'
import { User } from '../models/user.entity.js'

const profileRepo = appDataSource.getRepository(Profile)
const userRepo = appDataSource.getRepository(User)

const userProfile = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, photo } = req.body

    if (!name || !photo)
      return res.status(400).json({ message: 'name and photo are required' })

    const profile = new Profile()
    profile.name = name
    profile.photo = photo
    const newProfile = await profileRepo.save(profile)

    return res.status(200).json({ message: 'User profile', newProfile })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const getUserProfile = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const profile = await userRepo.find()
    return res.status(200).json({ message: 'User profile', profile })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}
export { userProfile, getUserProfile }

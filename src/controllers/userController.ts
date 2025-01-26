import { Request, Response } from 'express'

const userProfile = async (req: Request, res: Response): Promise<Response> => {
  try {
    return res.status(200).json({ message: 'User profile' })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

// import { Request, Response } from 'express'
// import appDataSource from '../constants/index.js'
// import { Profile } from '../models/profile.entity.js'
// import { User } from '../models/user.entity.js'
// import { Product } from '../models/product.entity.js'
// import { Company } from '../models/company.entity.js'
// import { getRepos } from '../utills/index.js'

// const userProfile = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const { name, photo } = req.body

//     if (!name || !photo)
//       return res.status(400).json({ message: 'name and photo are required' })
//     // const profileRepo:any = getRepos(Profile)
//     const profile = new Profile()
//     profile.name = name
//     profile.photo = photo
//     const newProfile = await profileRepo.save(profile)

//     return res.status(200).json({ message: 'User profile', newProfile })
//   } catch (error) {
//     return res.status(500).json({ message: error })
//   }
// }

// const getUserProfile = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const profile = await userRepo.find()
//     return res.status(200).json({ message: 'User profile', profile })
//   } catch (error) {
//     return res.status(500).json({ message: error })
//   }
// }

// const oneToManyRel = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const products: Product[] = []
//     let product = new Product()
//     product.title = 'iphone'
//     product.price = 200000
//     product.description = 'this is smart iphone'

//     products.push(product)

//     let companys = new Company()

//     companys.name = 'meta'
//     companys.headquarter = 'usa'
//     companys.product = products

//     return res.status(200).json({ message: 'User profile' })
//   } catch (error) {
//     return res.status(500).json({ message: error })
//   }
// }

// export { userProfile, getUserProfile, oneToManyRel }

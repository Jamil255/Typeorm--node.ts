import { Request, Response } from 'express'
import { getError, getRepos } from '../utills/index.js'
import { Course } from '../models/manytomany/course.js'
import { Student } from '../models/manytomany/index.js'
import appDataSource from '../constants/index.js'

export const getAllUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // const course = new Course()
    // course.name = 'web and app'
    // course.expiryDate = new Date('2026-01-30')
    // await appDataSource.manager.save(course)

    // const course1 = new Course()
    // course1.name = 'backend web app'
    // course1.expiryDate = new Date('2026-02-30')
    // await appDataSource.manager.save(course1)

    // const student = new Student()
    // student.fullName = 'jhon deo'
    //   student.email = 'jhon@gmail.com'
    //   student.age=20
    // student.course = [course, course1]
    // await appDataSource.manager.save(student)

    const stdRepo = getRepos('Student')
    //   const findAll = await stdRepo.find()
      const deleteStd=await stdRepo.delete(3)
    return res.status(200).json({ message: 'OK' ,deleteStd})
  } catch (error) {
    const errorMessage = getError(error)
    return res.status(500).json({ message: errorMessage })
  }
}

import { Request, Response } from "express"
import { listUsersService, postUserService } from "../services/users.services"


export const postUserController = async (request: Request, response: Response) => {

    const isAdm = false
    
    const newUser = await postUserService(request.body, isAdm)
    
    return response.status(201).json({data: newUser})
}


export const listUsersController = async (request: Request, response: Response) => {

    const allUsers = await listUsersService()

    return response.json(allUsers)
}
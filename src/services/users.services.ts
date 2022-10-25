import { IUserKeys } from "../interfaces/users.interfaces";
import { User } from "../entities/user.entity";
import { objectAlreadyExists, postGeneric, validateDataToCreate } from "../utils/createGenerics";
import { IUserResponse } from "../interfaces/users.interfaces"
import { getAllObjectsGeneric } from "../utils/getGenerics";


export const postUserService = async (data: any, isAdm: boolean) => {

    const newUserInfo = {...data, isAdm}
    
    const validatedUser = await validateDataToCreate(newUserInfo, IUserKeys)
    const userAlreadyExists = await objectAlreadyExists(User, "username", validatedUser.username)
    const newUser = await postGeneric(User, validatedUser, (user: IUserResponse) => {

        delete user.password
        
    })

    return newUser

}


export const listUsersService = async () => {

    const allUsers = await getAllObjectsGeneric(User, (users: any) => {
        users.forEach( (user: any) => delete user.password)
    })

    return allUsers

}

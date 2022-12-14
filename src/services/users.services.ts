import { IUserKeys } from "../interfaces/users.interfaces";
import { User } from "../entities/user.entity";
import { objectAlreadyExists, postGeneric, validateDataToCreate } from "../utils/createGenerics";


export const postUserService = async (data: any, isAdm: boolean) => {

    const newUserInfo = {...data, isAdm}
    
    const validatedUser = await validateDataToCreate(newUserInfo, IUserKeys)
    const userAlreadyExists = await objectAlreadyExists(User, "username", validatedUser.username)
    const newUser = await postGeneric(User, validatedUser)

    delete newUser.password

    return newUser

}

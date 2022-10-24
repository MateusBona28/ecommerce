import { IUserKeys } from "../interfaces/users.interfaces";
import { User } from "../entities/user.entity";
import { postGeneric, validateDataToCreate } from "../utils/create";


export const postUserService = async (data: any, isAdm: boolean) => {

    const newUserInfo = {...data, isAdm}
    
    const validatedUser = await validateDataToCreate(newUserInfo, IUserKeys)
    const newUser = await postGeneric(User, validatedUser)

    delete newUser.password

    return newUser

}

import { User } from "../entities/user.entity";
import { IUserLogin } from "../interfaces/users.interfaces";
import { getObjectOr404 } from "../utils/getGenerics";
import { generateToken, passwordMatches } from "../utils/logInUser";


export const logInService = async ({username, password}: IUserLogin) => {

    const user = await getObjectOr404(User, "username", username)

    const isAuthorized = await passwordMatches(user, password)

    user.isAuthorized = isAuthorized

    delete user.password

    const token = generateToken(user)

    return {token}

}
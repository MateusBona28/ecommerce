import { compare } from "bcryptjs";
import AppError from "../errors/AppError";
import { IUserLogin, IUserRequest } from "../interfaces/users.interfaces";
import jwt from "jsonwebtoken"


export const verifyLoginInfo = (loginInfo: IUserLogin) => {

    if (!loginInfo.username || !loginInfo.password) {
        throw new AppError("missing login info", 400);
    }
}


export const passwordMatches = async (user: any, password: any) => {

    const passwordIsValid = await compare(password, user.password)

    if (!passwordIsValid) {
        throw new AppError("invalid password", 403);
    }

    return true

}

export const generateToken = (user: any) => {

    if (!user.isAuthorized) {
        throw new AppError("usuário não autorizado", 403);
    }

    const token = jwt.sign(
        {
            user: user
        },
        process.env.SECRET_KEY as string, 
        {
            expiresIn: "7d",
            subject: user.id
        }
    )

    return token

}
import { Request, Response } from "express";
import { logInService } from "../services/sessions.services";
import { verifyLoginInfo } from "../utils/logInUser";


export const logInController = async (request: Request, response: Response) => {

    verifyLoginInfo(request.body)

    const { username, password } = request.body

    const token = await logInService({username, password})

    return response.json(token)

}
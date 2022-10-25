import { Router } from "express";
import { listUsersController, postUserController } from "../controllers/users.controllers";

const usersRoutes = Router()


usersRoutes.post("", postUserController)
usersRoutes.get("", listUsersController)


export default usersRoutes
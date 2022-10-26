import { Router } from "express";
import { listUserDetailController, listUsersController, postUserController } from "../controllers/users.controllers";

const usersRoutes = Router()


usersRoutes.post("", postUserController)
usersRoutes.get("", listUsersController)
usersRoutes.get("/:id/", listUserDetailController)


export default usersRoutes
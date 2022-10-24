import { Router } from "express";
import { logInController } from "../controllers/sessions.controllers";

const sessionRoutes = Router()

sessionRoutes.post("", logInController)

export default sessionRoutes
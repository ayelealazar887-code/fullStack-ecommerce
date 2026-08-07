import {Router} from "express"
import User from "../models/User.js"
import { logout, register, login } from "../controllers/userController.js";


const userRouter = Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/logout', logout)

export default userRouter;



import { Router } from "express";
import { register , login , logout , profile } from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";
const userRoutes=Router();

userRoutes.post('/register',upload.single("avatar"),register);
userRoutes.post('/login',login);
userRoutes.get('/logout',logout);
userRoutes.get('/profile',isLoggedIn ,profile);

export default userRoutes;
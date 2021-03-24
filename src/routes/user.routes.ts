import { Router } from 'express';
import { Request, Response } from "express";

import { UserController } from "../controller/user.controller";

export class UserRouter {

    public userController: UserController = new UserController();
    public usersRouter = Router();


    public getRoutes() {
        // this.usersRouter.get('/actions', this.userController.getUserActions);
        this.usersRouter.get('/logout', this.userController.logoutUser);
        this.usersRouter.post('/login', this.userController.loginUser);
        this.usersRouter.post('/signup',  this.userController.signupUser);
        return this.usersRouter;

    }

}
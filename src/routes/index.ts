// const router = require('express').Router();
// router.use('/user', require('./users'));

// module.exports = router;

import express, { Application, Router } from "express";
import { UserRouter } from './user.routes'

export class Routes {

    public userRouter: UserRouter = new UserRouter();

    public router = express.Router();

    public routes(app: Application): void {
        app.use('/api/v1/user', this.userRouter.getRoutes());
    }



}


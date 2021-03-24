import { Request, Response } from "express";
import lodash from "lodash";
import userService from '../service/user.service'
import { v4 as uuid } from 'uuid';
import bcryptjs from 'bcryptjs'


import Signup from "../models/signup";
import Login from "../models/login";




export class UserController {

    async loginUser(req: Request, res: Response) {
        console.log(req.headers.authorization)
        console.log('inside login with body', req.body);
        const userDetails: Login = {
            email: req.body.email,
            password: req.body.password,
        };
        if (lodash.isEmpty(userDetails.email) || lodash.isEmpty(userDetails.password)) {
            return res.status(400).send({ error: "Bad request.. Can you please add proper data !!" });
        }

        const data = await userService.loginUser(userDetails)
        console.log('user login successfully or not', data)
        if (data.error) {
            return res.status(400).send(data);
        } else {
            return res.status(201).send(data);
        }
    }

    logoutUser(req: Request, res: Response) {

    }

    // getUserActions(req: Request, res: Response) {
    //     const token = req.headers.authorization || '';
    //     const actions = userService.getUserActions(token);
    //     console.log(actions)
    //     if (actions == undefined) {
    //         return res.status(400).send(actions);
    //     } else {
    //         return res.status(200).send(actions);
    //     }
    // }

    async signupUser(req: Request, res: Response) {
        console.log('request body came is', req.body)

        if (lodash.isEmpty(req.body.email) ||
            lodash.isEmpty(req.body.password) ||
            lodash.isEmpty(req.body.mobileNo) ||
            lodash.isEmpty(req.body.userName)) {
            return res.status(400).send({ error: "Bad request.. Can you please add proper data !!" });
        }

        const salt = bcryptjs.genSaltSync(10);
        const userDetails: Signup = {
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, salt),
            role: req.body.role || 'CUSTOMER',
            userid: uuid(),
            mobileNo: req.body.mobileNo,
            username: req.body.userName,
            createdBy: req.body.email,
            updatedBy: req.body.email,
        };
        console.log('user details are', userDetails);
        const data = await userService.signupUser(userDetails)
        return res.status(201).send(data);
    }

}
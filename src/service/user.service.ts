import lodash from "lodash";
import Signup from "../models/signup";
import Login from "../models/login";
import bcryptjs from 'bcryptjs'
// import TokenManager from '../utils/tokenmanager';
// import JsonWebTokenPayload from "../dto/jsonWebTokenpayload";
// import useraction from '../useraction';

// const useraction = require('./useraction').default;

const sequelize = require('../models/user')


const Users = sequelize.models.User


class UserService {
    // tokenmanager: TokenManager = new TokenManager();

    async loginUser(user: Login) {
        try {
            const userfetched = await Users.findAll({ where: { email: user.email } });
            console.log('user fetched from db is ', userfetched[0].password);
            console.log('true or not', bcryptjs.compareSync(userfetched[0].password, user.password))
            console.log('user password is', user.password)

             if (userfetched.length != 0 && bcryptjs.compareSync(user.password, userfetched[0].password)) {
                console.log('user found is', userfetched);
                // const tokenPayload: JsonWebTokenPayload = {
                //     email: user.email,
                //     role: userfetched[0].role
                // }
                // const token = this.tokenmanager.generateToken(tokenPayload);
               // console.log('token crated is', token);
                 return {"message":"User is valid"};

            } else {
                return { "error": "Invalid credential" }
            }
        } catch (error) {
            console.log(error);
            return { "error": "problem in login user with credential" + user }
        }

    }

    logoutUser(req: Request, res: Response) {
        localStorage.clear();
    }

    // getUserActions(token: string) {

    //     try {
    //         const tokenPayload = this.tokenmanager.extractPayloadFromToken(token);
    //         console.log('token pauload', tokenPayload)
    //         console.log(useraction)
    //         const filteredAction = lodash.find(useraction.data, { role: tokenPayload.role });
    //         return filteredAction
    //     } catch (e) {
    //         console.log("get user actions");
    //         return { error: "Invalid token" }
    //     }
    // }

    async signupUser(user: Signup) {

        try {
            const suser = await Users.create(user);

            console.log('user saved ia', suser)
            return suser
        } catch (error) {
            console.log(error);
            return { "error": "problem in saving result" }
        }

    }

}

export default new UserService();
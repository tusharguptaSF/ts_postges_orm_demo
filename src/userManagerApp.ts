import express from "express";
import * as bodyParser from "body-parser";

import { Routes } from "./routes";

class UserManagerApp {

    public app!: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }


}

export default new UserManagerApp().app;
// const app = express();



// app.get('/', (req, res) => {
//     res.send('Well done!');
// })

// app.listen(3000, () => {
//     console.log('The application is listening on port 3000!');
// })


// https://medium.com/@wekesabill/setting-up-a-nodejs-project-with-typescript-postgres-and-sequelize-cb5cbc2cdc70
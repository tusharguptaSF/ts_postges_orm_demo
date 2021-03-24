import Sequelize from 'sequelize';
const config = require('../config').default;



const db = config.databases.database
const username = config.databases.username
const password = config.databases.password
export const sequelize = new Sequelize(db, username, password, {
  dialect: config.databases.dialect,
  port: config.databases.port,
});


// export const sequelize = new Sequelize(db, username, password, {
//   dialect: config.databases.dialect,
//   port: config.databases.port,
// });

sequelize.authenticate()
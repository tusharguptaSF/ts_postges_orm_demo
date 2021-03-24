// import * as Sequelize from 'sequelize'
const { Model,DataTypes } = require('sequelize');

import { sequelize } from '../db/sequelize'

const PROTECTED_ATTRIBUTES = ['password', 'id'];
class User extends Model {

  toJSON() {
    // hide protected fields
    const attributes = { ...this.get() };
    // eslint-disable-next-line no-restricted-syntax
    for (const a of PROTECTED_ATTRIBUTES) {
      delete attributes[a];
    }
    return attributes;
  }
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */

}


User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  userid: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  role: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: {
      args: false,
      msg: 'Please enter your email address',
    },
    unique: true,
    validate: {
      isEmail: {
        args: true,
        msg: 'Please enter a valid email address',
      },
    },
  },
  password: {
    type: DataTypes.STRING
  },
  mobileNo: {
    type: DataTypes.STRING,
    unique: true,
  },
  username: {
    type: DataTypes.STRING
  },
  createdBy: {
    type: DataTypes.STRING
  },
  updatedBy: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'User',
});

(async () => {
  await sequelize.sync({ force: false });
  // Code here
})();

module.exports = sequelize;

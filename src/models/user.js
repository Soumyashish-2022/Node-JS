'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 123456
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user)=>{
    const hasedPassword = bcrypt.hashSync(user.password, 10)
    user.password = hasedPassword
  })
  return User;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Youtube extends Model {
    static associate(models) {
      // define association here
    }
  }
  Youtube.init({
    code: DataTypes.STRING,
    type: DataTypes.STRING,
    log: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Youtube',
  });
  return Youtube;
};
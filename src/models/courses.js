'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: DataTypes.STRING,
    desshort: DataTypes.STRING,
    dess: DataTypes.STRING,
    author: DataTypes.STRING,
    time: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    price_sale: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};
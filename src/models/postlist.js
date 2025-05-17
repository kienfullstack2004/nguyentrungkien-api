'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PostList.belongsTo(models.User,{foreignKey:"author",targetKey:"id",as:"userdetail"})
    }
  }
  PostList.init({
    title: DataTypes.TEXT,
    dess: DataTypes.TEXT,
    desshort: DataTypes.TEXT,
    image: DataTypes.STRING,
    author:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PostList',
  });
  return PostList;
};
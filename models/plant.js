'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {

    static associate(models) {
    }
  }
  Plant.init({
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    light: DataTypes.STRING,
    water: {
      type: DataTypes.ENUM,
      values: [ 'Light', 'Moderate', 'Generous' ],
      defaultValue: 'Moderate',
    },
  }, {
    sequelize,
    modelName: 'Plant',
  });
  return Plant;
};
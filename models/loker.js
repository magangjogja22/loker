'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  loker.init({
    id_loker: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    regional: DataTypes.STRING,
    nama_loker: DataTypes.STRING,
    alamat_loker: DataTypes.STRING,
    bidang: DataTypes.STRING,
    pen_min: DataTypes.STRING,
    gaji: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'loker',
    tableName: 'loker'
  });
  return loker;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelamar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pelamar.init({
    id_pelamar: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_pelamar: DataTypes.STRING,
    username_pelamar: DataTypes.STRING,
    password_pelamar: DataTypes.STRING,
    kontak_pelamar: DataTypes.STRING,
    alamat_pelamar: DataTypes.STRING,
    pen_akhir: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pelamar',
    tableName: 'pelamar'
  });
  return pelamar;
};
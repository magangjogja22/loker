'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pendaftaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  pendaftaran.init({
    id_pendaftaran: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_pelamar: DataTypes.STRING,
    id_admin: DataTypes.STRING,
    id_admin_super: DataTypes.STRING,
    id_loker: DataTypes.STRING,
    tgl_daftar: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'pendaftaran',
    tableName: 'pendaftaran'
  });
  return pendaftaran;
};
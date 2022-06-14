'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin_super extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.pendaftaran, {
        foreignKey: "id_admin_super",
        as: "pendaftaran"
      })
    }
  }
  admin_super.init({
    id_admin_super: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_pelamar: DataTypes.STRING,
    id_admin: DataTypes.STRING,
    id_loker: DataTypes.STRING,
    id_transaksi: DataTypes.STRING,
    nama_admin_super: DataTypes.STRING,
    username_admin_super: DataTypes.STRING,
    password_admin_super: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admin_super',
    tableName: 'admin_super'
  });
  return admin_super;
};
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('loker', {
      id_loker: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      regional: {
        type: Sequelize.STRING
      },
      nama_loker: {
        type: Sequelize.STRING
      },
      alamat_loker: {
        type: Sequelize.STRING
      },
      bidang: {
        type: Sequelize.STRING
      },
      pen_min: {
        type: Sequelize.STRING
      },
      gaji: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('loker');
  }
};
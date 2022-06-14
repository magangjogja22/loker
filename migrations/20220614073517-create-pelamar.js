'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pelamar', {
      id_pelamar: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_pelamar: {
        type: Sequelize.STRING
      },
      username_pelamar: {
        type: Sequelize.STRING
      },
      password_pelamar: {
        type: Sequelize.STRING
      },
      kontak_pelamar: {
        type: Sequelize.STRING
      },
      alamat_pelamar: {
        type: Sequelize.STRING
      },
      pen_akhir: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('pelamar');
  }
};
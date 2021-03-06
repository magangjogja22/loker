'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admin', {
      id_admin: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_admin: {
        type: Sequelize.STRING
      },
      username_admin: {
        type: Sequelize.STRING
      },
      password_admin: {
        type: Sequelize.STRING
      },
      regional: {
        type: Sequelize.STRING
      },
      kontak_admin: {
        type: Sequelize.STRING
      },
      alamat_admin: {
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
    await queryInterface.dropTable('admin');
  }
};
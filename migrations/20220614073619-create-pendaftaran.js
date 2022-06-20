'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pendaftaran', {
      id_pendaftaran: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pelamar: {
        type: Sequelize.INTEGER,
        references: {
          model: "pelamar",
          key: "id_pelamar"
        }
      },
      id_admin: {
        type: Sequelize.INTEGER,
        references: {
          model: "admin",
          key: "id_admin"
        }
      },
      id_loker: {
        type: Sequelize.INTEGER,
        references: {
          model: "loker",
          key: "id_loker"
        }
      },
      tgl_daftar: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('pendaftaran');
  }
};
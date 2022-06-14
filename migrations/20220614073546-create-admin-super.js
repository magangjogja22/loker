'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admin_super', {
      id_admin_super: {
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
      id_pendaftaran: {
        type: Sequelize.INTEGER,
        references: {
          model: "pendaftaran",
          key: "id_pendaftaran"
        }
      },
      nama_admin_super: {
        type: Sequelize.STRING
      },
      username_admin_super: {
        type: Sequelize.STRING
      },
      password_admin_super: {
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
    await queryInterface.dropTable('admin_super');
  }
};
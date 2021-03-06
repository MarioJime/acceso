'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contadores_sams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ns_tarjeta: {
        type: Sequelize.STRING
      },
      environment_log: {
        type: Sequelize.STRING
      },
      events_log: {
        type: Sequelize.STRING
      },
      contracts_log: {
        type: Sequelize.STRING
      },
      load_log: {
        type: Sequelize.STRING
      },
      fecha_hora: {
        type: Sequelize.DATE
      },
      folio: {
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
    await queryInterface.dropTable('contadores_sams');
  }
};
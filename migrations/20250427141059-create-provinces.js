'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('provinces', { 
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      englishName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nepaliName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      field: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
   });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Provinces');
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('municipalities',{
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
      nepaliName:{
        type: Sequelize.STRING,
        allowNull: true
      },
      provinceId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'provinces',
          key:'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
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
 
    await queryInterface.dropTable('municipalities');    
  }
};

'use strict';

const { SequelizeMethod } = require('sequelize/lib/utils');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      fullAddress:{
        type: Sequelize.STRING,
        allowNull: true,        
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      municipalityId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'municipalities',
          key:'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      provinceId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'provinces', key: 'id'},
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users',key: 'id'},
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('addresses');     
  }
};

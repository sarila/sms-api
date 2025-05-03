'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('proposals', { 
     id: { 
       type: Sequelize.INTEGER,
       allowNull: false,
       autoIncrement: true,
       primaryKey: true
     },
     title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,    // WYSIWYG content
      allowNull: true
    },
    files: {
      type: Sequelize.JSON,    // store file paths/meta
      allowNull: true
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    provinceId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'provinces', key: 'id' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    },
    municipalityId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'municipalities', key: 'id' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    },
    schoolId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'schools', key: 'id' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    },
    tags: {
      type: Sequelize.JSON,
      allowNull: true
    },
    metadata: {
      type: Sequelize.JSON,
      allowNull: true
    },
    status: {
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
   await queryInterface.dropTable('proposals');
 }
};


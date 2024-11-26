'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },
      firstName: {
          type: Sequelize.STRING(128),
          allowNull: true
      },
      lastName: {
          type: Sequelize.STRING(128),
          allowNull: true
      },
      email: {
          type: Sequelize.STRING(128),
          allowNull: true
      },
      password: {
          type: Sequelize.STRING(128),
          allowNull: true
      },
      mobile: {
          type: Sequelize.STRING(128),
          allowNull: true
      },
      gender: {
          type: Sequelize.ENUM('male','female'),
          allowNull: true
      },
      accessToken: {
          type: Sequelize.STRING(128),
          allowNull: true
      },
      resetPasswordToken: {
          type: Sequelize.STRING(16),
          allowNull: true
      },
      adminAccess: {
          type: Sequelize.INTEGER(1),
          allowNull: true,
          defaultValue: '0'
      },
      temporaryAddress: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      permanentAddress: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      schoolId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'schools',
          key: 'id',
        },
        onDelete: 'set null',
        allowNull: true
      },
      roleId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'userRoles',
          key: 'id',
        },
        onDelete: 'set null',
        allowNull: true
      },
      studentIdNo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      citizenshipNo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      emailVerifiedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      profileImage: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
  });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};

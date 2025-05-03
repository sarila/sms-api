'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('userRoles', 'roles');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('roles', 'userRoles')
  }
};

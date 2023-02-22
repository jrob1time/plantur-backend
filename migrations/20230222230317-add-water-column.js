'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('Plants', 'water', { type: Sequelize.ENUM('Light', 'Moderate', 'Generous'), defaultValue: 'Moderate' })
  },
  async down(queryInterface, Sequelize) {

    await queryInterface.removeColumn('Plants', 'water')
  }
};
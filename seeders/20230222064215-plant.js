'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const date = new Date()

    await queryInterface.bulkInsert('Plants', [{
      name: "Ivy",
    species: "pathos",
    light:  "evening light",
    water: "Moderate",
      createdAt: date,
      updatedAt: date,
    }])

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Plants', null, {})

  }
};

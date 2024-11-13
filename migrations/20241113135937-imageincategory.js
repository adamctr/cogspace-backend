"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Categorie", "image", {
      type: Sequelize.STRING,
      allowNull: true, // Change to false if you want to make this field required
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Categorie", "image");
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Fiche", "Published", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Tu peux ajuster la valeur par défaut selon ton besoin
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Fiche", "Published");
  },
};

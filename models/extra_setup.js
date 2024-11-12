function applyExtraSetup(sequelize) {
  // console.log("ApplyExtraSetup", sequelize.models);
  const { Utilisateurs, Commentaires } = sequelize.models;

  // console.log("Utilisateurs", typeof Utilisateurs);
  // console.log("Commentaires", typeof Commentaires);

  Utilisateurs.hasMany(Commentaires, {
    foreignKey: "AuteurID",
  });

  Commentaires.belongsTo(Utilisateurs, {
    foreignKey: "AuteurID",
  });
}

module.exports = { applyExtraSetup };

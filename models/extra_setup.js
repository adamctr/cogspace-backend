function applyExtraSetup(sequelize) {
  console.log("ApplyExtraSetup", sequelize.models);
  const { Utilisateurs, Commentaires, Categorie, Fiche } = sequelize.models;

  Utilisateurs.hasMany(Commentaires, {
    foreignKey: "AuteurID",
  });

  Commentaires.belongsTo(Utilisateurs, {
    foreignKey: "AuteurID",
  });

  Categorie.hasMany(Fiche, {
    foreignKey: "CategorieID",
  });

  Fiche.belongsTo(Categorie, {
    foreignKey: "CategorieID",
  });
}

module.exports = { applyExtraSetup };

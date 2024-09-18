const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Utilisateur_Fiche_Notes', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FicheID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Fiche',
        key: 'ID'
      }
    },
    UtilisateurID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Utilisateurs',
        key: 'ID'
      }
    },
    Note: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Utilisateur_Fiche_Notes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "FicheID",
        using: "BTREE",
        fields: [
          { name: "FicheID" },
        ]
      },
      {
        name: "UtilisateurID",
        using: "BTREE",
        fields: [
          { name: "UtilisateurID" },
        ]
      },
    ]
  });
};

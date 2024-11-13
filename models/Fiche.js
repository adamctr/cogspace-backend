const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Fiche =  sequelize.define('Fiche', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Titre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Contenu: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    UtilisateurID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Utilisateurs',
        key: 'ID'
      }
    },
    CategorieID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Categorie',
        key: 'ID'
      }
    },
    DateCreation: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    DateModification: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FicheNoteMoyenne: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Fiche',
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
        name: "UtilisateurID",
        using: "BTREE",
        fields: [
          { name: "UtilisateurID" },
        ]
      },
      {
        name: "CategorieID",
        using: "BTREE",
        fields: [
          { name: "CategorieID" },
        ]
      },
    ]
  });

  return Fiche;
};

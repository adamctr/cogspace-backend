const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Categorie_Fiche', {
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
    CategorieID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Categorie',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Categorie_Fiche',
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
        name: "CategorieID",
        using: "BTREE",
        fields: [
          { name: "CategorieID" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Commentaires', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Contenu: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Position: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AuteurID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Utilisateurs',
        key: 'ID'
      }
    },
    FicheID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Fiche',
        key: 'ID'
      }
    },
    DatePublication: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'Commentaires',
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
        name: "AuteurID",
        using: "BTREE",
        fields: [
          { name: "AuteurID" },
        ]
      },
      {
        name: "FicheID",
        using: "BTREE",
        fields: [
          { name: "FicheID" },
        ]
      },
    ]
  });
};

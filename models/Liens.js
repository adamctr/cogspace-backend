const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Liens', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SourceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Fiche',
        key: 'ID'
      }
    },
    CibleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Fiche',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Liens',
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
        name: "SourceID",
        using: "BTREE",
        fields: [
          { name: "SourceID" },
        ]
      },
      {
        name: "CibleID",
        using: "BTREE",
        fields: [
          { name: "CibleID" },
        ]
      },
    ]
  });
};

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Lien_Fiche', {
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
    tableName: 'Lien_Fiche',
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

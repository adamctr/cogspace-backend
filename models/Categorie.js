module.exports = function (sequelize, DataTypes) {
  const Categorie = sequelize.define(
    "Categorie",
    {
      ID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Nom: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      CategorieParentID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Categorie",
          key: "ID",
        },
      },
    },
    {
      sequelize,
      tableName: "Categorie",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "ID" }],
        },
        {
          name: "CategorieParentID",
          using: "BTREE",
          fields: [{ name: "CategorieParentID" }],
        },
      ],
    }
  );

  return Categorie;
};

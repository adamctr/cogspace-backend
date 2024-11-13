module.exports = function(sequelize, DataTypes) {
  const Permission = sequelize.define('Permission', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "Nom"
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Permission',
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
        name: "Nom",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Nom" },
        ]
      },
    ]
  });

  return Permission;
};

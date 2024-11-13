module.exports = function(sequelize, DataTypes) {
  const Role = sequelize.define('Role', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "Nom"
    }
  }, {
    sequelize,
    tableName: 'Role',
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

  return Role;
};

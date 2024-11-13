module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Role_Utilisateur', {
    UtilisateurID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Utilisateurs',
        key: 'ID'
      }
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Role',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Role_Utilisateur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UtilisateurID" },
          { name: "RoleID" },
        ]
      },
      {
        name: "RoleID",
        using: "BTREE",
        fields: [
          { name: "RoleID" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Role_Permission', {
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Role',
        key: 'ID'
      }
    },
    PermissionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Permission',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Role_Permission',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RoleID" },
          { name: "PermissionID" },
        ]
      },
      {
        name: "PermissionID",
        using: "BTREE",
        fields: [
          { name: "PermissionID" },
        ]
      },
    ]
  });
};

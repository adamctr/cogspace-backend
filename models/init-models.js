var DataTypes = require("sequelize").DataTypes;
var _Categorie = require("./Categorie");
var _Categorie_Fiche = require("./Categorie_Fiche");
var _Commentaires = require("./Commentaires");
var _Fiche = require("./Fiche");
var _Lien_Fiche = require("./Lien_Fiche");
var _Liens = require("./Liens");
var _Permission = require("./Permission");
var _Role = require("./Role");
var _Role_Permission = require("./Role_Permission");
var _Role_Utilisateur = require("./Role_Utilisateur");
var _Utilisateur_Fiche_Notes = require("./Utilisateur_Fiche_Notes");
var _Utilisateurs = require("./Utilisateurs");

function initModels(sequelize) {
  var Categorie = _Categorie(sequelize, DataTypes);
  var Categorie_Fiche = _Categorie_Fiche(sequelize, DataTypes);
  var Commentaires = _Commentaires(sequelize, DataTypes);
  var Fiche = _Fiche(sequelize, DataTypes);
  var Lien_Fiche = _Lien_Fiche(sequelize, DataTypes);
  var Liens = _Liens(sequelize, DataTypes);
  var Permission = _Permission(sequelize, DataTypes);
  var Role = _Role(sequelize, DataTypes);
  var Role_Permission = _Role_Permission(sequelize, DataTypes);
  var Role_Utilisateur = _Role_Utilisateur(sequelize, DataTypes);
  var Utilisateur_Fiche_Notes = _Utilisateur_Fiche_Notes(sequelize, DataTypes);
  var Utilisateurs = _Utilisateurs(sequelize, DataTypes);

  Permission.belongsToMany(Role, { as: 'RoleID_Roles', through: Role_Permission, foreignKey: "PermissionID", otherKey: "RoleID" });
  Role.belongsToMany(Permission, { as: 'PermissionID_Permissions', through: Role_Permission, foreignKey: "RoleID", otherKey: "PermissionID" });
  Role.belongsToMany(Utilisateurs, { as: 'UtilisateurID_Utilisateurs', through: Role_Utilisateur, foreignKey: "RoleID", otherKey: "UtilisateurID" });
  Utilisateurs.belongsToMany(Role, { as: 'RoleID_Role_role_utilisateurs', through: Role_Utilisateur, foreignKey: "UtilisateurID", otherKey: "RoleID" });
  Categorie.belongsTo(Categorie, { as: "CategorieParent", foreignKey: "CategorieParentID"});
  Categorie.hasMany(Categorie, { as: "categories", foreignKey: "CategorieParentID"});
  Categorie_Fiche.belongsTo(Categorie, { as: "Categorie", foreignKey: "CategorieID"});
  Categorie.hasMany(Categorie_Fiche, { as: "categorie_fiches", foreignKey: "CategorieID"});
  Fiche.belongsTo(Categorie, { as: "Categorie", foreignKey: "CategorieID"});
  Categorie.hasMany(Fiche, { as: "fiches", foreignKey: "CategorieID"});
  Categorie_Fiche.belongsTo(Fiche, { as: "Fiche", foreignKey: "FicheID"});
  Fiche.hasMany(Categorie_Fiche, { as: "categorie_fiches", foreignKey: "FicheID"});
  Commentaires.belongsTo(Fiche, { as: "Fiche", foreignKey: "FicheID"});
  Fiche.hasMany(Commentaires, { as: "commentaires", foreignKey: "FicheID"});
  Lien_Fiche.belongsTo(Fiche, { as: "Source", foreignKey: "SourceID"});
  Fiche.hasMany(Lien_Fiche, { as: "lien_fiches", foreignKey: "SourceID"});
  Lien_Fiche.belongsTo(Fiche, { as: "Cible", foreignKey: "CibleID"});
  Fiche.hasMany(Lien_Fiche, { as: "Cible_lien_fiches", foreignKey: "CibleID"});
  Liens.belongsTo(Fiche, { as: "Source", foreignKey: "SourceID"});
  Fiche.hasMany(Liens, { as: "liens", foreignKey: "SourceID"});
  Liens.belongsTo(Fiche, { as: "Cible", foreignKey: "CibleID"});
  Fiche.hasMany(Liens, { as: "Cible_liens", foreignKey: "CibleID"});
  Utilisateur_Fiche_Notes.belongsTo(Fiche, { as: "Fiche", foreignKey: "FicheID"});
  Fiche.hasMany(Utilisateur_Fiche_Notes, { as: "utilisateur_fiche_notes", foreignKey: "FicheID"});
  Role_Permission.belongsTo(Permission, { as: "Permission", foreignKey: "PermissionID"});
  Permission.hasMany(Role_Permission, { as: "role_permissions", foreignKey: "PermissionID"});
  Role_Permission.belongsTo(Role, { as: "Role", foreignKey: "RoleID"});
  Role.hasMany(Role_Permission, { as: "role_permissions", foreignKey: "RoleID"});
  Role_Utilisateur.belongsTo(Role, { as: "Role", foreignKey: "RoleID"});
  Role.hasMany(Role_Utilisateur, { as: "role_utilisateurs", foreignKey: "RoleID"});
  Commentaires.belongsTo(Utilisateurs, { as: "Auteur", foreignKey: "AuteurID"});
  Utilisateurs.hasMany(Commentaires, { as: "commentaires", foreignKey: "AuteurID"});
  Fiche.belongsTo(Utilisateurs, { as: "Utilisateur", foreignKey: "UtilisateurID"});
  Utilisateurs.hasMany(Fiche, { as: "fiches", foreignKey: "UtilisateurID"});
  Role_Utilisateur.belongsTo(Utilisateurs, { as: "Utilisateur", foreignKey: "UtilisateurID"});
  Utilisateurs.hasMany(Role_Utilisateur, { as: "role_utilisateurs", foreignKey: "UtilisateurID"});
  Utilisateur_Fiche_Notes.belongsTo(Utilisateurs, { as: "Utilisateur", foreignKey: "UtilisateurID"});
  Utilisateurs.hasMany(Utilisateur_Fiche_Notes, { as: "utilisateur_fiche_notes", foreignKey: "UtilisateurID"});

  return {
    Categorie,
    Categorie_Fiche,
    Commentaires,
    Fiche,
    Lien_Fiche,
    Liens,
    Permission,
    Role,
    Role_Permission,
    Role_Utilisateur,
    Utilisateur_Fiche_Notes,
    Utilisateurs,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

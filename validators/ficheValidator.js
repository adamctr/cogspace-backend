const { body, param } = require("express-validator");

exports.createFicheValidator = [
  body("Titre").notEmpty().withMessage("Le titre est requis"),
  body("Contenu").notEmpty().withMessage("Le contenu est requis"),
  body("UtilisateurID").isInt().withMessage("ID utilisateur invalide"),
  body("CategorieID").isInt().withMessage("ID catégorie invalide")
];

exports.updateFicheValidator = [
  param("id").isInt().withMessage("ID invalide"),
  body("Titre").notEmpty().withMessage("Le titre est requis"),
  body("Contenu").notEmpty().withMessage("Le contenu est requis"),
  body("UtilisateurID").isInt().withMessage("ID utilisateur invalide"),
  body("CategorieID").isInt().withMessage("ID catégorie invalide")
];

exports.getFicheByIdValidator = [param("id").isInt().withMessage("ID invalide")];
exports.deleteFicheValidator = [param("id").isInt().withMessage("ID invalide")];

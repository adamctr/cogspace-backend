const { body, param } = require("express-validator");

exports.createUserValidator = [
  body("nom").notEmpty().withMessage("Le nom est requis"),
  body("email").isEmail().withMessage("Un email valide est requis"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
];

exports.updateUserValidator = [
  param("id").isInt().withMessage("ID invalide"),
  body("nom").optional().notEmpty().withMessage("Le nom ne peut pas être vide"),
  body("email").optional().isEmail().withMessage("Un email valide est requis"),
  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
];

exports.getUserByIdValidator = [param("id").isInt().withMessage("ID invalide")];

exports.deleteUserValidator = [param("id").isInt().withMessage("ID invalide")];

const { body, param } = require("express-validator");
const { sequelize, DataTypes } = require("../app");
const Utilisateur = require("../models/Utilisateurs")(sequelize, DataTypes);

exports.createUserValidator = [
  body("Nom").notEmpty().withMessage("Le nom est requis"),
  body("Prenom").notEmpty().withMessage("Le prenom est requis"),
  body("Email").isEmail().withMessage("Un email valide est requis"),
  body("Email").custom(async (value) => {
    console.log(value);
    console.log(Utilisateur);
    const existingUser = await Utilisateur.findOne({
      where: { Email: value },
    });
    if (existingUser) {
      throw new Error("Cet email est déjà utilisé");
      return;
    }
    return true;
  }),
  body("MotDePasse")
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
];

exports.updateUserValidator = [
  param("id").isInt().withMessage("ID invalide"),
  body("Nom").optional().notEmpty().withMessage("Le nom ne peut pas être vide"),
  body("Email").optional().isEmail().withMessage("Un email valide est requis"),
  body("MotDePasse")
    .optional()
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
];

exports.getUserByIdValidator = [param("id").isInt().withMessage("ID invalide")];

exports.deleteUserValidator = [param("id").isInt().withMessage("ID invalide")];

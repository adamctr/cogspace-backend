const express = require("express");
const router = express.Router();

const UtilisateurFicheFavorisController = require("../controllers/UtilisateurFicheFavorisController");

// Route pour ajouter une fiche aux favoris d'un utilisateur
router.post("/", UtilisateurFicheFavorisController.addFavorite);

// Route pour supprimer une fiche des favoris d'un utilisateur
router.delete("/", UtilisateurFicheFavorisController.removeFavorite);

// Route pour lister les fiches favorites d'un utilisateur
router.get("/:utilisateurId", UtilisateurFicheFavorisController.listFavorites);

module.exports = router;

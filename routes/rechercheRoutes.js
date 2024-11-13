const express = require("express");
const router = express.Router();
const RechercheController = require("../controllers/rechercheController");

// Route pour rechercher des utilisateurs
router.get("/users", RechercheController.searchUtilisateurs);

// Route pour rechercher des fiches
router.get("/fiches", RechercheController.searchFiches);

// Route pour rechercher des catégories
router.get("/categories", RechercheController.searchCategories);

module.exports = router;
const express = require("express");
const router = express.Router();

const categorieController = require("../controllers/categorieController");

// Route pour obtenir toutes les catégories
router.get("/", categorieController.getAllCategories);

// Route pour obtenir une catégorie par son ID
router.get("/:id", categorieController.getCategorieById);

// Route pour obtenir les catégories enfants d'une catégorie
router.get("/:id/enfants", categorieController.getEnfants);

// Route pour obtenir les catégories parent d'une catégorie
router.get("/:id/parent", categorieController.getParent);

// Route pour obtenir les fiches d'une catégorie
router.get("/:id/fiches", categorieController.getFiches);

// Route pour créer une nouvelle catégorie
router.post("/", categorieController.createCategorie);

// Route pour mettre à jour une catégorie
router.put("/:id", categorieController.updateCategorie);

// Route pour supprimer une catégorie
router.delete("/:id", categorieController.deleteCategorie);

module.exports = router;

const express = require("express");
const router = express.Router();

const ficheController = require("../controllers/ficheController");

// Route pour obtenir toutes les fiches
router.get("/", ficheController.getAllfiches);

// Route pour obtenir une fiche par son ID
router.get("/:id", ficheController.getFicheById);

// Route pour obtenir les catégories d'une fiche
router.get("/:id/category", ficheController.getCategories);

// Route pour créer une nouvelle fiche
router.post("/", ficheController.createFiche);

// Route pour mettre à jour une fiche
router.put("/:id", ficheController.updateFiche);

// Route pour supprimer une fiche
router.delete("/:id", ficheController.deleteFiche);

module.exports = router;

const express = require("express");
const router = express.Router();

const ficheController = require("../controllers/ficheController");
const ficheValidator = require("../validators/ficheValidator");

// Route pour obtenir toutes les fiches
router.get("/", ficheController.getAllfiches);

// Route pour obtenir une fiche par son ID
router.get(
  "/:id",
  ficheValidator.getFicheByIdValidator,
  ficheController.getFicheById
);

// Route pour obtenir les catégories d'une fiche
router.get(
  "/:id/category",
  ficheValidator.getFicheByIdValidator,
  ficheController.getCategories
);

// Route pour créer une nouvelle fiche
router.post(
  "/",
  ficheValidator.createFicheValidator,
  ficheController.createFiche
);

// Route pour mettre à jour une fiche
router.put(
  "/:id",
  ficheValidator.updateFicheValidator,
  ficheController.updateFiche
);

// Route pour supprimer une fiche
router.delete(
  "/:id",
  ficheValidator.deleteFicheValidator,
  ficheController.deleteFiche
);

// Route pour noter une fiche
router.post(
  "/:id/note",
  ficheController.noterFiche
);

// Route pour récupérer la moyenne des notes d'une fiche
router.get(
  "/:id/note",
  ficheController.getMoyenneNotes
);

module.exports = router;

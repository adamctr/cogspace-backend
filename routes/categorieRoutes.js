const express = require("express");
const router = express.Router();

const categorieController = require("../controllers/categorieController");

// Route pour obtenir toutes les catégories
router.get("/", categorieController.getAllCategories);

// Route pour créer une nouvelle catégorie
// router.post("/", categorieController.createCategorie);

module.exports = router;

const express = require("express");
const router = express.Router();

const utilisateurController = require("../controllers/utilisateurController");

// Route pour obtenir tous les utilisateurs
router.get("/", utilisateurController.getAllUtilisateurs);

// Route pour obtenir un utilisateur par son ID
router.get("/:id", utilisateurController.getUtilisateurById);

// Route pour obtenir les fiches d'un utilisateur
router.get("/:id/fiches", utilisateurController.getFiches);

// Route pour créer un nouvel utilisateur
router.post("/", utilisateurController.createUtilisateur);

// Route pour mettre à jour un utilisateur
router.put("/:id", utilisateurController.updateUtilisateur);

// Route pour supprimer un utilisateur
router.delete("/:id", utilisateurController.deleteUtilisateur);

module.exports = router;

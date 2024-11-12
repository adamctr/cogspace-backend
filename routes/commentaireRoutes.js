const express = require("express");
const router = express.Router();
const CommentaireController = require("../controllers/commentaireController");

// Route pour créer un nouveau commentaire
router.post("/", CommentaireController.creerCommentaire);

// Route pour récupérer tous les commentaires pour une fiche spécifique
router.get("/:ficheID", CommentaireController.getCommentaires);

// Route pour mettre à jour un commentaire existant
router.put("/:commentaireID", CommentaireController.mettreAJourCommentaire);

// Route pour supprimer un commentaire
router.delete("/:commentaireID", CommentaireController.supprimerCommentaire);

module.exports = router;

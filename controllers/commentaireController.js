const { parse } = require("path");
const { sequelize } = require("../models/index");
const { Commentaires, Fiche, Utilisateurs } = sequelize.models;

class CommentaireController {
  // Créer un nouveau commentaire
  static async creerCommentaire(req, res) {
    try {
      const { Contenu, FicheID, UtilisateurID, Position } = req.body;
      console.log(req.body);

      // Vérifier si la fiche existe
      const fiche = await Fiche.findByPk(FicheID);
      if (!fiche) {
        return res.status(404).json({ message: "Fiche non trouvée" });
      }

      if (!Contenu) {
        return res.status(400).json({ message: "Le contenu est requis" });
      }

      if (!UtilisateurID) {
        return res.status(400).json({ message: "L'auteur est requis" });
      }

      // Créer le commentaire
      const commentaire = await Commentaires.create({
        Contenu: Contenu,
        FicheID: FicheID,
        AuteurID: UtilisateurID,
        Position: parseInt(Position),
      });

      res.status(201).json(commentaire);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la création du commentaire", error });
    }
  }

  // Récupérer tous les commentaires pour une fiche
  static async getCommentaires(req, res) {
    try {
      const { FicheID } = req.params;
      // Vérifier si la fiche existe
      const fiche = await Fiche.findByPk(FicheID);
      if (!fiche) {
        return res.status(404).json({ message: "Fiche non trouvée" });
      }

      // Récupérer les commentaires
      const commentaires = await Commentaires.findAll({
        where: { FicheID: FicheID },
        include: [{ model: Utilisateurs, as: "Auteur", attributes: ["nom"] }],
        order: [["DatePublication", "ASC"]],
      });

      res.status(200).json(commentaires);
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la récupération des commentaires",
        error,
      });
    }
  }

  // Mettre à jour un commentaire
  static async mettreAJourCommentaire(req, res) {
    try {
      const { ID } = req.params;
      const { Contenu } = req.body;

      // Vérifier si le commentaire existe
      const commentaire = await Commentaires.findByPk(ID);
      if (!commentaire) {
        return res.status(404).json({ message: "Commentaire non trouvé" });
      }

      // Mettre à jour le Contenu
      commentaire.Contenu = Contenu;
      await commentaire.save();

      res.status(200).json(commentaire);
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la mise à jour du commentaire",
        error,
      });
    }
  }

  // Supprimer un commentaire
  static async supprimerCommentaire(req, res) {
    try {
      const { ID } = req.params;

      // Vérifier si le commentaire existe
      const commentaire = await Commentaires.findByPk(ID);
      if (!commentaire) {
        return res.status(404).json({ message: "Commentaire non trouvé" });
      }

      // Supprimer le commentaire
      await commentaire.destroy();
      res.status(200).json({ message: "Commentaire supprimé avec succès" });
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la suppression du commentaire",
        error,
      });
    }
  }
}

module.exports = CommentaireController;

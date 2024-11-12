const { sequelize, DataTypes } = require("../app");
const Commentaire = require("../models/Commentaires")(sequelize, DataTypes);
const Fiche = require("../models/Fiche")(sequelize, DataTypes);
const Utilisateur = require("../models/Utilisateurs")(sequelize, DataTypes);

class CommentaireController {
  // Créer un nouveau commentaire
  static async creerCommentaire(req, res) {
    try {
      const { Contenu, FicheID, UtilisateurID } = req.body;

      // Vérifier si la fiche existe
      const fiche = await Fiche.findByPk(FicheID);
      if (!fiche) {
        return res.status(404).json({ message: "Fiche non trouvée" });
      }

      // Créer le commentaire
      const commentaire = await Commentaire.create({
        Contenu: Contenu,
        FicheID: FicheID,
        AuteurID: UtilisateurID,
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
      const commentaires = await Commentaire.findAll({
        where: { FicheID: FicheID },
        include: [{ model: Utilisateur, attributes: ["nom"] }],
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
      const commentaire = await Commentaire.findByPk(ID);
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
      const commentaire = await Commentaire.findByPk(ID);
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

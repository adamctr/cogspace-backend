const { sequelize } = require("../models/index");
const { Utilisateurs, Fiche, User_Fiche_Favoris } = sequelize.models;

class UtilisateurFicheFavorisController {
  // Ajouter une fiche aux favoris d'un utilisateur
  static async addFavorite(req, res) {
    try {
      const { UtilisateurID, FicheID } = req.body;
      await User_Fiche_Favoris.create({
        UtilisateurID: UtilisateurID,
        FicheID: FicheID,
      });
      res
        .status(201)
        .json({ message: "Fiche ajoutée aux favoris avec succès." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Supprimer une fiche des favoris d'un utilisateur
  static async removeFavorite(req, res) {
    try {
      const { UtilisateurID, FicheID } = req.body;
      await User_Fiche_Favoris.destroy({
        where: { UtilisateurID: UtilisateurID, FicheID: FicheID },
      });
      res
        .status(200)
        .json({ message: "Fiche supprimée des favoris avec succès." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Lister les fiches favorites d'un utilisateur
  static async listFavorites(req, res) {
    try {
      const { UtilisateurID } = req.params;
      const utilisateur = await Utilisateurs.findByPk(UtilisateurID, {
        include: {
          model: Fiche,
          as: "Favoris",
        },
      });
      if (!utilisateur) {
        return res.status(404).json({ message: "Utilisateur non trouvé." });
      }
      res.status(200).json(utilisateur.Favoris);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UtilisateurFicheFavorisController;

const { sequelize } = require("../models/index");
const { Utilisateurs, Fiche, Categorie } = sequelize.models;
const { Op } = require("sequelize");

// Rechercher des utilisateurs
exports.searchUtilisateurs = async (req, res) => {
  try {
    const { query } = req.query;
    const utilisateurs = await Utilisateurs.findAll({
      where: {
        [Op.or]: [
          { Nom: { [Op.like]: `%${query}%` } },
          { Prenom: { [Op.like]: `%${query}%` } },
          { Email: { [Op.like]: `%${query}%` } },
        ],
      },
    });
    res.status(200).json(utilisateurs);
  } catch (error) {
    console.error("Erreur lors de la recherche des utilisateurs :", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Rechercher des fiches
exports.searchFiches = async (req, res) => {
  try {
    const { query } = req.query;
    const fiches = await Fiche.findAll({
      where: {
        [Op.or]: [
          { Titre: { [Op.like]: `%${query}%` } },
          { Contenu: { [Op.like]: `%${query}%` } },
        ],
      },
    });
    res.status(200).json(fiches);
  } catch (error) {
    console.error("Erreur lors de la recherche des fiches :", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Rechercher des catégories
exports.searchCategories = async (req, res) => {
  try {
    const { query } = req.query;
    const categories = await Categorie.findAll({
      where: {
        [Op.or]: [
          { Nom: { [Op.like]: `%${query}%` } },
          { Description: { [Op.like]: `%${query}%` } },
        ],
      },
    });
    res.status(200).json(categories);
  } catch (error) {
    console.error("Erreur lors de la recherche des catégories :", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};
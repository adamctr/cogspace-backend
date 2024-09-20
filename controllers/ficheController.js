const { sequelize, DataTypes } = require("../app");
const Fiche = require("../models/Fiche")(sequelize, DataTypes);
const Categorie = require("../models/Categorie")(sequelize, DataTypes); // pour la relation entre Fiche et Categorie

// Obtenir toutes les fiches
exports.getAllfiches = async (req, res) => {
  try {
    const fiches = await Fiche.findAll();
    if (!fiches || fiches.length === 0) {
      return res.status(404).json({ message: "Aucune fiche trouvée" });
    }
    res.status(200).json(fiches);
  } catch (error) {
    console.error("Erreur lors de la récupération des fiches:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Obtenir une fiche par son ID
exports.getFicheById = async (req, res) => {
  try {
    const fiche = await Fiche.findByPk(req.params.id);
    if (!fiche) {
      return res.status(404).json({ message: "Fiche non trouvée" });
    }
    res.status(200).json(fiche);
  } catch (error) {
    console.error("Erreur lors de la récupération de la fiche:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Obtenir les catégories d'une fiche
exports.getCategories = async (req, res) => {
  try {
    const fiche = await Fiche.findByPk(req.params.id, {
      include: [{
        model: Categorie, // Assuming the association is already defined
        as: "Categories" // Adjust this if needed
      }]
    });
    if (!fiche || !fiche.CategorieID) {
      return res.status(404).json({ message: "Catégorie non trouvée pour cette fiche" });
    }
    res.status(200).json(fiche);
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Créer une nouvelle fiche
exports.createFiche = async (req, res) => {
  try {
    const nouvelleFiche = await Fiche.create(req.body);
    res.status(201).json(nouvelleFiche);
  } catch (error) {
    console.error("Erreur lors de la création de la fiche:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Mettre à jour une fiche
exports.updateFiche = async (req, res) => {
  try {
    const [updatedRows] = await Fiche.update(req.body, {
      where: { ID: req.params.id }
    });
    if (updatedRows === 0) {
      return res.status(404).json({ message: "Fiche non trouvée ou pas de mise à jour" });
    }
    res.status(200).json({ message: "Fiche mise à jour avec succès" });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la fiche:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Supprimer une fiche
exports.deleteFiche = async (req, res) => {
  try {
    const deletedRows = await Fiche.destroy({
      where: { ID: req.params.id }
    });
    if (deletedRows === 0) {
      return res.status(404).json({ message: "Fiche non trouvée" });
    }
    res.status(200).json({ message: "Fiche supprimée avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de la fiche:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

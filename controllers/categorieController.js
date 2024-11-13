const { sequelize } = require("../models/index");
const { Categorie } = sequelize.models;

// Obtenir toutes les catégories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll({ limit: 10 });
    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "Aucune catégorie trouvée" });
    }
    res.status(200).json(categories);
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Obtenir une catégorie par son ID
exports.getCategorieById = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (!categorie) {
      return res.status(404).json({ message: "Catégorie non trouvée" });
    }
    res.status(200).json(categorie);
  } catch (error) {
    console.error("Erreur lors de la récupération de la catégorie:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Obtenir les catégories enfants d'une catégorie
exports.getEnfants = async (req, res) => {
  try {
    const enfants = await Categorie.findAll({
      where: {
        CategorieParentID: req.params.id 
      },
    });
    if (!enfants || enfants.length === 0) {
      return res.status(404).json({ message: "Pas de catégories enfants trouvées" });
    }
    res.status(200).json(enfants);
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories enfants:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Obtenir la catégorie parent d'une catégorie
exports.getParent = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (!categorie || !categorie.CategorieParentID) {
      return res.status(404).json({ message: "Catégorie ou parent non trouvé" });
    }
    const parent = await Categorie.findByPk(categorie.CategorieParentID);
    if (!parent) {
      return res.status(404).json({ message: "Catégorie parent non trouvée" });
    }
    res.status(200).json(parent);
  } catch (error) {
    console.error("Erreur lors de la récupération du parent:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Obtenir les fiches d'une catégorie
exports.getFiches = async (req, res) => {
  try {
    // Relation entre Categorie et Fiche devrait être définie
    const fiches = await Categorie.findByPk(req.params.id, {
      include: [Fiche], // Assuming "Fiches" is the association name
    });
    if (!fiches) {
      return res.status(404).json({ message: "Pas de fiches trouvées pour cette catégorie" });
    }
    res.status(200).json(fiches);
  } catch (error) {
    console.error("Erreur lors de la récupération des fiches:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Créer une nouvelle catégorie
exports.createCategorie = async (req, res) => {
  try {
    const nouvelleCategorie = await Categorie.create(req.body);
    res.status(201).json(nouvelleCategorie);
  } catch (error) {
    console.error("Erreur lors de la création de la catégorie:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Mettre à jour une catégorie
exports.updateCategorie = async (req, res) => {
  try {
    const [updatedRows] = await Categorie.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRows === 0) {
      return res.status(404).json({ message: "Catégorie non trouvée ou pas de mise à jour" });
    }
    res.status(200).json({ message: "Catégorie mise à jour avec succès" });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la catégorie:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Supprimer une catégorie
exports.deleteCategorie = async (req, res) => {
  try {
    const deletedRows = await Categorie.destroy({
      where: { id: req.params.id },
    });
    if (deletedRows === 0) {
      return res.status(404).json({ message: "Catégorie non trouvée" });
    }
    res.status(200).json({ message: "Catégorie supprimée avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de la catégorie:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

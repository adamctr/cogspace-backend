const Categorie = require("../models/Categorie");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "Aucune catégorie trouvée" });
    }
    res.status(200).json(categories);
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

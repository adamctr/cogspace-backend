const { sequelize, DataTypes, Op } = require("../app");
const Categorie = require("../models/Categorie")(sequelize, DataTypes);

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      // where: {
      // CategorieParentID: {
      //   [Op.between]: [10, 20]
      //   }
      // }s
      limit: 10,
    });
    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "Aucune catégorie trouvée" });
    }
    res.status(200).json(categories);
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};
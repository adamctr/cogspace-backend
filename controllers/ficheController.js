const { sequelize } = require("../models/index");
const { Fiche, Categorie, Utilisateurs, Utilisateur_Fiche_Notes } = sequelize.models;

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
      include: [
        {
          model: Categorie, // Assuming the association is already defined
          as: "Categorie", // Adjust this if needed
        },
      ],
    });
    if (!fiche || !fiche.CategorieID) {
      return res
        .status(404)
        .json({ message: "Catégorie non trouvée pour cette fiche" });
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
    const { Titre, Contenu, UtilisateurID, CategorieID } = req.body;
    const nouvelleFiche = await Fiche.create({
      Titre,
      Contenu,
      UtilisateurID,
      CategorieID,
    });
    res.status(201).json(nouvelleFiche);
  } catch (error) {
    console.error("Erreur lors de la création de la fiche:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Mettre à jour une fiche
exports.updateFiche = async (req, res) => {
  try {
    const { Titre, Contenu, UtilisateurID, CategorieID } = req.body;
    const [updatedRows] = await Fiche.update(
      { Titre, Contenu, UtilisateurID, CategorieID },
      {
        where: { ID: req.params.id },
      }
    );
    if (updatedRows === 0) {
      return res
        .status(404)
        .json({ message: "Fiche non trouvée ou pas de mise à jour" });
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
    const { Titre, Contenu, UtilisateurID, CategorieID } = req.body;
    const deletedRows = await Fiche.destroy({
      where: { ID: req.params.id },
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

// Noter une fiche
exports.noterFiche = async (req, res) => {
  try {
    const { UtilisateurID, Note } = req.body;
    const { id: FicheID } = req.params;

    // Vérifier si la fiche existe
    const fiche = await Fiche.findByPk(FicheID);
    if (!fiche) {
      return res.status(404).json({ message: "Fiche non trouvée" });
    }

    // Vérifier si l'utilisateur existe
    const utilisateur = await Utilisateurs.findByPk(UtilisateurID);
    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // Vérifier si la note est valide
    if (Note < 1 || Note > 5) {
      return res
        .status(400)
        .json({ message: "La note doit être comprise entre 1 et 5" });
    }

    // Créer ou mettre à jour la note
    const [note, created] = await Utilisateur_Fiche_Notes.upsert({
      UtilisateurID,
      FicheID,
      Note,
    });

    // Mettre à jour la note moyenne de la fiche
    const notes = await Utilisateur_Fiche_Notes.findAll({ where: { FicheID } });
    const noteMoyenne =
      notes.reduce((acc, curr) => acc + curr.Note, 0) / notes.length;
    fiche.FicheNoteMoyenne = noteMoyenne;
    await fiche.save();

    res.status(200).json({ message: "Note ajoutée avec succès", note });
  } catch (error) {
    console.error("Erreur lors de l'ajout de la note:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

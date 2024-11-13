const { sequelize } = require("../models/index");
const { Utilisateur, Fiche } = sequelize.models;
const crypto = require("crypto");

// Obtenir tous les utilisateurs
exports.getAllUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.findAll();
    if (!utilisateurs || utilisateurs.length === 0) {
      return res.status(404).json({ message: "Aucun utilisateur trouvé" });
    }
    res.status(200).json(utilisateurs);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Obtenir un utilisateur par son ID
exports.getUtilisateurById = async (req, res) => {
  try {
    console.log(req.params.id);
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.status(200).json(utilisateur);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Obtenir les fiches d'un utilisateur
exports.getFiches = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id, {
      include: [
        {
          model: Fiche, // Assuming the association is already defined
          as: "Fiches", // Adjust if needed
        },
      ],
    });
    if (!utilisateur) {
      return res
        .status(404)
        .json({ message: "Utilisateur ou fiches non trouvés" });
    }
    res.status(200).json(utilisateur.Fiches);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des fiches de l'utilisateur:",
      error
    );
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Créer un nouvel utilisateur
exports.createUtilisateur = async (req, res) => {
  console.log(req.body);

  try {
    const { Nom, Prenom, Email, MotDePasse } = req.body;
    // console.log(Nom, Prenom, Email, MotDePasse);

    const hashedPasswd = crypto
      .createHash("sha256")
      .update(MotDePasse)
      .digest("hex");

    const nouvelUtilisateur = await Utilisateur.create({
      Nom,
      Prenom,
      Email,
      MotDePasse: hashedPasswd,
    });

    res.status(201).json(nouvelUtilisateur);
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Mettre à jour un utilisateur
exports.updateUtilisateur = async (req, res) => {
  try {
    const [updatedRows] = await Utilisateur.update(req.body, {
      where: { ID: req.params.id },
    });
    if (updatedRows === 0) {
      return res
        .status(404)
        .json({ message: "Utilisateur non trouvé ou pas de mise à jour" });
    }
    res.status(200).json({ message: "Utilisateur mis à jour avec succès" });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Supprimer un utilisateur
exports.deleteUtilisateur = async (req, res) => {
  try {
    const deletedRows = await Utilisateur.destroy({
      where: { ID: req.params.id },
    });
    if (deletedRows === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

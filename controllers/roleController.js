const { sequelize } = require("../models/index");
const { Role } = sequelize.models;

// Obtenir tous les rôles

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll({ limit: 10 });
    if (!roles || roles.length === 0) {
      return res.status(404).json({ message: "Aucun rôle trouvé" });
    }
    res.status(200).json(roles);
  } catch (error) {
    console.error("Erreur lors de la récupération des rôles:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Obtenir un rôle par son ID

exports.getRoleById = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) {
      return res.status(404).json({ message: "Rôle non trouvé" });
    }
    res.status(200).json(role);
  } catch (error) {
    console.error("Erreur lors de la récupération du rôle:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Obtenir les rôles d'un utilisateur

exports.getRolesByUtilisateur = async (req, res) => {
  try {
    const roles = await Role.findAll({
      where: {
        UtilisateurID: req.params.id,
      },
    });
    if (!roles || roles.length === 0) {
      return res.status(404).json({ message: "Aucun rôle trouvé" });
    }
    res.status(200).json(roles);
  } catch (error) {
    console.error("Erreur lors de la récupération des rôles:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Créer un rôle

exports.createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(201).json(role);
  } catch (error) {
    console.error("Erreur lors de la création du rôle:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Mettre à jour un rôle

exports.updateRole = async (req, res) => {
  try {
    const [updated] = await Role.update(req.body, {
      where: {
        ID: req.params.id,
      },
    });
    if (updated) {
      const updatedRole = await Role.findByPk(req.params.id);
      return res.status(200).json(updatedRole);
    }
    throw new Error("Rôle non trouvé");
  } catch (error) {
    console.error("Erreur lors de la mise à jour du rôle:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Supprimer un rôle

exports.deleteRole = async (req, res) => {
  try {
    const deleted = await Role.destroy({
      where: {
        ID: req.params.id,
      },
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error("Rôle non trouvé");
  } catch (error) {
    console.error("Erreur lors de la suppression du rôle:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

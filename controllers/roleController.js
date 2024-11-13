const { sequelize } = require("../models/index");
const { Role, Role_Utilisateur } = sequelize.models;

// Obtenir tous les rôles

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll({ limit: 10 });
    if (!roles || roles.length === 0) {
      return res.status(404).json({ message: "Aucun rôle trouvé" });
    }
    res.status(200).json({ message: "Rôles récupérés avec succès", roles });
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
    res.status(200).json({ message: "Rôle récupéré avec succès", role });
  } catch (error) {
    console.error("Erreur lors de la récupération du rôle:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

// Obtenir les rôles d'un utilisateur

exports.getRolesByUtilisateur = async (req, res) => {
    try {
        const roles = await Role_Utilisateur.findAll({
            where: {
                UtilisateurID: req.params.id,
            },
            include: [{
                model: Role,
                attributes: ['ID', 'Nom'],
                as: "Role"
            }]
        });
        if (!roles || roles.length === 0) {
            return res.status(404).json({ message: "Aucun rôle trouvé pour cet utilisateur" });
        }
        res.status(200).json({ message: "Rôles de l'utilisateur récupérés avec succès", roles });
    } catch (error) {
        console.error("Erreur lors de la récupération des rôles:", error);
        res.status(500).json({ message: "Erreur serveur interne" });
    }
};

// Ajouter un rôle à un utilisateur

exports.addRoleToUtilisateur = async (req, res) => {
    try {
        const { UtilisateurID, RoleID } = req.body;
        const role = await Role_Utilisateur.create({ UtilisateurID, RoleID });
        res.status(201).json({ message: "Rôle ajouté à l'utilisateur avec succès", role });
    } catch (error) {
        console.error("Erreur lors de l'ajout du rôle à l'utilisateur:", error);
        res.status(500).json({ message: "Erreur serveur interne" });
    }
}

// Créer un rôle

exports.createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(201).json({ message: "Rôle créé avec succès", role });
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
      return res.status(200).json({ message: "Rôle mis à jour avec succès", updatedRole });
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
      return res.status(200).json({ message: "Rôle supprimé avec succès" });
    }
    throw new Error("Rôle non trouvé");
  } catch (error) {
    console.error("Erreur lors de la suppression du rôle:", error);
    res.status(500).json({ message: "Erreur serveur interne" });
  }
};

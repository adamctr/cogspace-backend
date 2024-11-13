const express = require('express');
const router = express.Router();

const RoleController = require('../controllers/roleController');

// Route pour obtenir tous les rôles
router.get('/', RoleController.getAllRoles);

// Route pour obtenir un rôle par son ID
router.get('/:id', RoleController.getRoleById);

// Route pour obtenir les rôles d'un utilisateur spécifique
router.get('/user/:id', RoleController.getRolesByUtilisateur);

// Route pour créer un nouveau rôle
router.post('/', RoleController.createRole);

// Route pour mettre à jour un rôle existant
router.put('/:id', RoleController.updateRole);

// Route pour supprimer un rôle
router.delete('/:id', RoleController.deleteRole);

module.exports = router;
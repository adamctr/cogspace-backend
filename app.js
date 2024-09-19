const express = require("express");
const app = express();
const { Sequelize } = require('sequelize');
const PORT = process.env.PORT || 3000;

// Requires des routes
const ficheRoutes = require("./routes/ficheRoutes");
const categorieRoutes = require("./routes/categorieRoutes");
const utilisateurRoutes = require("./routes/utilisateurRoutes");

// Middleware pour parser les données JSON
app.use(express.json());

// Routes
app.use("/fiches", ficheRoutes); // Routes pour les fiches
app.use("/categories", categorieRoutes); // Routes pour les catégories
app.use("/utilisateurs", utilisateurRoutes); // Routes pour les utilisateurs

// Gérer les erreurs 404
app.use((req, res, next) => {
  res.status(404).json({ message: "Ressource non trouvée" });
});

// Lancer le serveur
db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
  });
});

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql' // or 'sqlite', 'postgres', 'mssql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });